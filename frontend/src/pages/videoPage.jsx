import React, { useState, useEffect } from 'react';

const VideoNoteTaker = () => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [video, setVideo] = useState({});

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
        setVideo(data.data); // Set the lectures state with fetched data
      } catch (error) {
        console.error("Error fetching lectures:", error);
      }
    };
    console.log('lol2');

    
    fetchData();
  }, 
  []);



  const handleSaveNote = () => {
    if (notes) {
      setSavedNotes([...savedNotes, notes]);
      setNotes(''); // Clear input after saving
    }   
  };

  return (
    <div className="  bg-gray-100 flex flex-col items-center justify-center mb-[10px] p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl    ">
        {/* Video Section */}
        <div className="mb-4">
            <span className='flex justify-between' ><h1 className="text-2xl font-bold mb-2">Watch and take some notes </h1>   </span>
            
           <iframe
              className="w-full h-[400px]  rounded-lg shadow-lg"
              src={video[1]?video[1].video_url:""}
              title="YouTube Video" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>

        {/* Notes Section */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Take Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your notes here..."
            rows="4"
          ></textarea>
          <button
            onClick={handleSaveNote}
            className="mt-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Save Note
          </button>
        </div>

        {/* Display Saved Notes */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Notes</h2>
          <ul className="list-disc list-inside max-h-64  bg-gray-50 p-4 rounded-lg overflow-y-auto">
            {savedNotes.length > 0 ? (
              savedNotes.map((note, index) => (
                <li key={index} className="mb-2 text-gray-700">
                  {note}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No notes saved yet.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoNoteTaker;
