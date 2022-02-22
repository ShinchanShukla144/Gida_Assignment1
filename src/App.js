import { useState } from "react";
import Dailog from "./Dailog";
import "./styles.css";

export default function App() {
  const [box, setBox] = useState(false);
  // const [bgColor, setBgColor] = useState("black");

  function createDiv() {
    setBox(true);
  }
  return (
    <div className="App">
      <h1>GIDA OFFICE BANGLORE</h1>
      <button className="dailog" onClick={createDiv}>
        Click for Dailog
      </button>
      {box && <Dailog />}
    </div>
  );
}
