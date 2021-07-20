import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [dino, setDino] = useState([]);
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    handleSubmit();
    getDinoImg();
  }, []);

  const handleSubmit = async () => {
    const response = await Axios.get(
      "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1490be4857mshc0fa7387b34dc9fp1fca78jsnff3069d0824b",
          "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
        },
      }
    );
    setDino(response.data);
  };

  const getDinoImg = async () => {
    const res = await Axios.get(
      "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1490be4857mshc0fa7387b34dc9fp1fca78jsnff3069d0824b",
          "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
        },
      }
    );
    console.log(res.data.value);
    setPicture(res.data.value);
  };

  return (
    <div className="App">
      <h1>Random Dinosaur Generator</h1>
      <button onClick={handleSubmit}> Generate Dinosaur</button>
      <div id="dinoWrapper">{dino[0].join(" ")}</div>
      <img src={picture[0].thumbnailUrl} />
    </div>
  );
}

export default App;
