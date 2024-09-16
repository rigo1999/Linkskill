# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import json
from googleapiclient.discovery import build
from isodate import parse_duration
from datetime import datetime

app = Flask(__name__)
cors = CORS(app, origins="*")
@app.route('/vids')
def hello_world():
    # YouTube Data API key
    api_key = "AIzaSyALODQ8uF41TlQINtv7Rd5OdNZx-c_T0lc"

    # Create a YouTube API client
    youtube = build('youtube', 'v3', developerKey=api_key)

    # Search for videos related to "React projects" or "frontend"
    search_request = youtube.search().list(
        q="React projects OR frontend",
        part="snippet",
        type="video",
        maxResults=110,  # Adjust to fetch more results if needed
    )
    search_response = search_request.execute()

    # Extract video IDs from the search results
    video_ids = [item['id']['videoId'] for item in search_response['items']]

    # Fetch video details (title, channel name, length, publish date, category, description, tags, thumbnail) using the video IDs
    video_details_request = youtube.videos().list(
        part="snippet,contentDetails,statistics",
        id=",".join(video_ids)
    )
    video_details_response = video_details_request.execute()

    # Fetch available video categories to map category IDs to category names
    categories_request = youtube.videoCategories().list(
        part="snippet",
        regionCode="US"  # Specify the region; adjust if needed
    )
    categories_response = categories_request.execute()

    # Create a dictionary to map category IDs to category names
    category_mapping = {item['id']: item['snippet']['title'] for item in categories_response['items']}

    # Create a list to store video details
    videos_data = []

    # Define the start date from which videos should be included
    start_date = datetime(2022, 5, 1)

    # Extract relevant information and calculate duration in seconds
    for video in video_details_response['items']:
        video_id = video['id']
        title = video['snippet']['title']
        channel_name = video['snippet']['channelTitle']
        publish_date = video['snippet']['publishedAt']
        view_count = video['statistics'].get('viewCount', 0)
        duration = parse_duration(video['contentDetails']['duration']).total_seconds()  # Convert ISO 8601 to seconds
        video_url = f"https://www.youtube.com/embed/{video_id}"  # Construct the video URL
        
        # Additional metadata
        description = video['snippet'].get('description', 'No description available')
        tags = video['snippet'].get('tags', [])
        thumbnail_url = video['snippet'].get('thumbnails', {}).get('high', {}).get('url', 'No thumbnail available')
        live_broadcast_content = video['snippet'].get('liveBroadcastContent', 'none')
        
        # Convert publish date string to datetime object
        publish_date_obj = datetime.strptime(publish_date, '%Y-%m-%dT%H:%M:%SZ')

        # Get the category ID and map it to the category name
        category_id = video['snippet'].get('categoryId', '')
        category_name = category_mapping.get(category_id, 'Unknown')  # Default to 'Unknown' if category not found

        # Check if the video was published on or after January 1, 2022
        if publish_date_obj >= start_date:
            # Add video details to the dictionary
            video_data = {
                'title': title,
                'channel_name': channel_name,
                'publish_date': publish_date,
                'view_count': int(view_count),
                'duration': duration,
                'video_url': video_url,
                'category': category_name,
                
                'tags': tags,
                'thumbnail_url': thumbnail_url,
                'live_broadcast_content': live_broadcast_content
            }

            # Append to the list
            videos_data.append(video_data)

    # Sort videos by duration in descending order
    videos_data.sort(key=lambda x: x['duration'], reverse=True)

    # Convert the list of video details to JSON format
    #videos_data_json = json.dumps(videos_data, indent=4)  # You can use this JSON string in your frontend

    
    return jsonify({'data':videos_data})

if __name__ == '__main__':
    app.run(debug=True)
