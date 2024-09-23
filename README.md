# 📺 LinksSkill

 
This project helps you fetch and display the most-watched tech tutorials on YouTube using **React.js** on the frontend and **Flask** as the backend. If you're looking to stay up-to-date with trending tech content, this project is a perfect starting point.  

## 🌟 Features

- **Top Tech Tutorials**: Automatically fetches the most popular tech-related tutorials from YouTube.
- **Real-time Data**: See the latest videos and trends as the data is fetched directly from YouTube's API.
- **Take notes**: Watch and take notes as you learn , do PBL
- **Modern UI**: A smooth and responsive frontend built with React.js.
- **Backend Power**: Flask handles the backend API requests to YouTube, managing data retrieval efficiently.
  
## 🛠️ Tech Stack

This project leverages modern technologies to create a seamless user experience:

- **React.js**: A powerful JavaScript library for building fast and interactive UIs.
- **Flask**: A lightweight and flexible Python web framework for the backend.
- **YouTube Data API**: For fetching the most-watched tech tutorials.

## ⚙️ How It Works

1. **Backend**: Flask connects to the YouTube Data API, fetching data about the most popular tech tutorials.
2. **Frontend**: React.js displays this data, presenting the videos in an intuitive and easy-to-browse UI.
3. **Seamless Interaction**: When the page loads, the Flask backend sends the fetched data to the React frontend, keeping everything in sync.

## 🖥️ Installation and Setup

### Prerequisites

- **Node.js** & **npm** (for React frontend)
- **Python 3.x** (for Flask backend)
- YouTube Data API key (you'll need this to fetch data from YouTube)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-tech-tutorial-fetcher.git
   cd youtube-tech-tutorial-fetcher
   ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Create a virtual environment:
     ```bash
     python3 -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Set up your environment variables (e.g., YouTube API key):
     ```bash
     export YOUTUBE_API_KEY="your_api_key"
     ```
   - Start the Flask server:
     ```bash
    python app.py
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. Open your browser and visit the app:
   ```bash
   http://localhost:3000
   ```

## 🚀 Usage

Once the setup is complete, the app will automatically fetch the most-watched tech tutorials from YouTube and display them on the homepage. You can click on any video to watch it directly on YouTube! and take some notes

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the project, feel free to:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Open a pull request with a clear description of the changes.

## 📝 License

No Licence😁

---

Happy coding! 😄