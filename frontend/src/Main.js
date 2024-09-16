import "./App.css";
import React, {  useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { useEffect } from "react";
function Main() {
  const [lectures, setLectures] = useState({});
  console.log('lol0');
  console.log(lectures);
  const [openModel, setOpenModel]= useState(false)

  const ToggleModel =()=>{
    setOpenModel(!openModel)
  }
  useEffect(() => {
    const fetchData = async () => {
      console.log('lol1');
      try {
        const response = await fetch(`http://127.0.0.1:5000/vids` , 
          {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        console.log('data', data);
        setLectures(data.data); // Set the lectures state with fetched data
      } catch (error) {
        console.error("Error fetching lectures:", error);
      }
    };
    console.log('lol2');

    
    fetchData();
  }, 
  []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/video');
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Education Platform</title>

      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-icon">🏠</div>
          <div className="sidebar-icon">📚</div>
          <div className="sidebar-icon">🔔</div>
          <div className="sidebar-icon">⚙️</div>
        </div>
        {/* Main Content */}
        <div className="main-content">
          <div className="header">
            <h1>Invest in your </h1>
          </div>
          <div className="header">
            <h1>education </h1>
          </div>

          {/* Categories */}
          <div className="categories">
            <div className="category active">
              <div className="category-icon">🏠</div>
              All
            </div>
            <div className="category" style={{ display: "flex" }}>
              <div onClick={console.log("hello bro ")} className="category-icon">🏠</div>
              IT &amp; Software
            </div>
            <div className="category">
              <div className="category-icon">🏠</div>
              Media Training
            </div>
            <div className="category">
              <div className="category-icon">🏠</div>
              Business
            </div>
            <div className="category">
              <div className="category-icon">🏠</div>
              Interior
            </div>
            <div className="category">
              <div className="category-icon">🏠</div>
              Interior
            </div>
            <div className="category">
              <div className="category-icon">🏠</div>
              Interior
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2    gap-4">
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="relative">
                <img
                  class="w-full h-48 object-cover"
                  src={lectures[1]?lectures[1].thumbnail_url:""}
                  alt="Video Thumbnail"
                />

                <div class="absolute inset-0 flex items-center justify-center">
                  <button class="bg-purple-600 text-white rounded-full p-4 shadow-lg focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-6.544 3.845c-.58.341-.208 1.212.494 1.212h13.096c.702 0 1.074-.871.494-1.212l-6.544-3.845a1 1 0 00-1.496.845v7.692c0 .657.705 1.067 1.26.745z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="p-4">
                <h2 class="text-xl font-bold text-gray-800">{lectures[1]?lectures[1].title:""}</h2>
                <p class="text-gray-800 text-sm mt-2">
                  This is a brief description of the video content. It's meant
                  to give viewers a quick insight before they watch.
                </p>

                <div class="flex items-center justify-between mt-4">
                  <button onClick={handleNavigate} class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
                    Watch Now
                  </button>
                  <span class="text-gray-600 text-sm">{ lectures[1]?Math.floor(lectures[1]["view_count"] / 1000 ) +"k":""} Views</span>
                </div>
              </div>
            </div>
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="relative">
                <img
                  c lass="w-full h-48 object-cover"
                  src={lectures[0]?lectures[0].thumbnail_url:""}
                  alt="Video Thumbnail"
                />

                <div class="absolute inset-0 flex items-center justify-center">
                  <button class="bg-purple-600 text-white rounded-full p-4 shadow-lg focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-6.544 3.845c-.58.341-.208 1.212.494 1.212h13.096c.702 0 1.074-.871.494-1.212l-6.544-3.845a1 1 0 00-1.496.845v7.692c0 .657.705 1.067 1.26.745z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="p-4">
                <h2 class="text-xl font-bold text-gray-800">{lectures[0]?lectures[0]["title"]:""}</h2>
                <p class="text-gray-800 text-sm mt-2">
                  This is a brief description of the video content. It's meant
                  to give viewers a quick insight before they watch.
                </p>

                <div class="flex items-center justify-between mt-4">
                  <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
                    Watch Now
                  </button>
                  <span class="text-gray-600 text-sm">{ lectures[0]?Math.floor(lectures[0]["view_count"] / 1000 ) +"k":""} Views</span>
                </div>
              </div>
            </div>
            
          </div>

          <div
            className="course"
            style={{
              display: "flex",
              flex: 1,
              height: "200px",
              gap: "40px",
              marginBottom: "20px",
              alignItems: "start",
            }}
          ></div>
        </div>
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-info">
            <div className="profile-img" />
            <h3>Annette Black</h3>
            <p>274 Friends</p>
          </div>
          <div className="activity-chart">
            <p>Activity Chart</p>
          </div>
          {/* My Courses */}
          <div className="my-courses">
            <h4>My Courses</h4>
            <div className="my-course-card">
              <h5>Flutter Masterclass (Dart, APIs, Firebase &amp; More)</h5>
              <p>9,530 students</p>
            </div>
            <div className="rating">4.8</div>
          </div>
          <div
            className="my-course-card  "
            style={{ backgroundColor: "#FFF0C7" }}
          >
            <h5>Powerful Business Writing: How to Write Concisely</h5>
            <p>1,463 students</p>
            <div className="rating">4.9</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
