Education Platform
This project is a comprehensive web application that includes both a frontend and backend component. The backend is built with Flask and interacts with the YouTube Data API to fetch and provide video data. The frontend, built with React, displays this video data in a user-friendly format.

Project Overview
The Education Platform aims to showcase educational YouTube videos related to "React projects" or "frontend" through a visually appealing and interactive interface. Users can browse through video cards, view video details, and navigate to a dedicated video page.

Backend - Flask API
Features
Fetch Videos: Retrieves videos from the YouTube Data API based on search terms.
Video Details: Provides detailed information about each video including title, channel name, publish date, view count, duration, and more.
Data Filtering: Filters videos based on publish date (from May 1, 2022).
Data Sorting: Sorts videos by duration in descending order.
CORS Enabled: Supports Cross-Origin Resource Sharing (CORS) for all origins.
Installation
Clone the Repository

bash
Copier le code
git clone <repository-url>
cd <repository-directory>
Install Dependencies

Make sure you have Python and pip installed. Then, install the required packages using:

bash
Copier le code
pip install Flask flask-cors google-api-python-client isodate
Setup Google API Key

Replace the placeholder API key in the app.py file with your own YouTube Data API key.

python
Copier le code
api_key = "YOUR_YOUTUBE_DATA_API_KEY"
Run the Flask Application

bash
Copier le code
python app.py
The server will start and listen on http://127.0.0.1:5000/.

Endpoint
GET /vids: Returns a JSON response with video details.
Frontend - React Application
Features
Video Display: Shows a grid of videos with thumbnails, titles, and view counts.
Fetch Data: Retrieves video data from the Flask backend.
Responsive Design: Utilizes Tailwind CSS for a modern, responsive UI.
Navigation: Includes navigation functionality to move to different pages.
Installation
Clone the Repository

bash
Copier le code
git clone <repository-url>
cd <repository-directory>
Install Dependencies

Make sure you have Node.js and npm installed. Then, install the required packages using:

bash
Copier le code
npm install
Start the Application

Ensure that your Flask backend is running. Then, start the React application with:

bash
Copier le code
npm start
The application will be accessible at http://localhost:3000.

Usage
The frontend fetches video data from the backend endpoint and displays it in a grid layout.
Click the "Watch Now" button to navigate to a different page (e.g., /video).
Code Overview
Backend (app.py): Fetches and processes YouTube video data, exposes it through a REST API.
Frontend (Main Component): Fetches data from the backend, displays videos, and handles navigation.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or support, please contact your-email@example.com.