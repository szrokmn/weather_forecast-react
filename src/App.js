import './App.css';
import React, { useState, useEffect } from "react";
import { usePosition } from "use-position";

function App() {

const [weather, setWeather] = useState();
const {latitude, longitude} = usePosition();

useEffect(()=> {
  
});

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
