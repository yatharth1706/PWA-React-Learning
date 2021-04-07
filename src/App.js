import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    const result = await fetch('https://orangevalleycaa.org/api/videos').then((response) => response.json())
    setData(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Videos</h1>
      </header>
      {data.map((video) => (
        <div key = {video.id}>
          <h2>{video.name}</h2>
          <video src = {video.video_url} height = "200" controls/>
        </div>
      ))}
    </div>
  );
}

export default App;
