import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from "particles-bg";
// import Clarifai from "clarifai";

//the New Clarifai API
const returnClarifaiRequestOptions = (imageUrl) => {
  // Your PAT (Personal Access Token) can be found in the Account's Security section
  const PAT = "e8750f78155f405295ae2ffd736bcab4";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "tasosnn";
  const APP_ID = "my-first-application";
  // Change these to whatever model and image URL you want to use

  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

///////////////////////////////////////////////////////////////////////////////////
//End of the Clarifai API

// const app = new Clarifai.App({
//   apiKey: "4e7c3821d93c4ea5ba90d0a662936f5a",
// });

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    console.log("click");

    // app.models
    //   .predict(
    //     "6dc7e46bc9124c5c8824be4822abe105",
    //     "https://samples.clarifai.com/face-det.jpg"
    //   )
    fetch(
      `https://api.clarifai.com/v2/models/face-detection/outputs`,
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          // there was an error
        }
      );
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition />
    </div>
  );
}

export default App;
