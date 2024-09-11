
import './App.css';
import React, { useEffect } from 'react';
function Main() {

const fetchData = async()=>{
  const response= await fetch("http://127.0.0.1:5000/lectures");
  const lectures = await response.json();
  console.log(lectures.forEach(lecture => console.log(lecture.name)))
  

}
useEffect(()=>{
  fetchData()
},[])


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
    <div className="category-icon"> 
    🏠
    </div>
    All
  </div>
  <div className="category" style={{display: "flex"  }}>
    <div className="category-icon">
    🏠
    </div>
    IT &amp; Software
  </div>
  <div className="category">
    <div className="category-icon">
    🏠
    </div>
    Media Training
  </div>
  <div className="category">
    <div className="category-icon">
   🏠
    </div>
    Business
  </div>
  <div className="category">
    <div className="category-icon">
   🏠
    </div>
    Interior
  </div>
  <div className="category">
    <div className="category-icon">
   🏠
    </div>
    Interior
  </div>
  <div className="category">
    <div className="category-icon">
   🏠
    </div>
    Interior
  </div>
</div>

          {/* Courses */}
          <div className="course" style={{ display:'flex', flex:1,height:"200px", gap:"40px", marginBottom:"20px", alignItems :"start" }}>
           
            <div className="course-card" style={{ backgroundColor: "#E4DAFF", height:"200px" }}>
              <div className="label">Media Training</div>
              <h3>Certified Six Sigma Yellow Belt Training</h3>
              <p>6,726 students</p>
              <div className="rating">4.9</div>
            </div>
            <div className="course-card" style={{ backgroundColor: "#DFF7EC", height:"200px" }}>
              <div className="label">Interior</div>
              <h3>How to Design a Room in 10 Easy Steps</h3>
              <p>8,735 students</p>
              <div className="rating">5.0</div>
            </div>
          </div>
          <div className="course" style={{ display:'flex', flex:1,height:"200px", gap:"40px", marginBottom:"20px", alignItems :"start" }}>
           
            <div className="course-card" style={{ backgroundColor: "#E4DAFF", height:"200px" }}>
              <div className="label">Media Training</div>
              <h3>Certified Six Sigma Yellow Belt Training</h3>
              <p>6,726 students</p>
              <div className="rating">4.9</div>
            </div>
            <div className="course-card" style={{ backgroundColor: "#DFF7EC" , height:"200px"}}>
              <div className="label">Interior</div>
              <h3>How to Design a Room in 10 Easy Steps</h3>
              <p>8,735 students</p>
              <div className="rating">5.0</div>
            </div>
          </div>
         
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
            className="my-course-card"
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
