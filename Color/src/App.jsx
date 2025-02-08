import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";

function App() {
  // List of color options
  const colorOptions = ["red", "blue", "green", "yellow"];

  // State for selected color, default is white
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div>
      <h1>Color Picker App</h1>
      <ColorPicker
        colorOptions={colorOptions} // Passing color options as a prop
        selectedColor={selectedColor} // Passing the selected color as a prop
        onColorSelect={setSelectedColor} // Callback function to update the selected color
      />
    </div>
  );
}

export default App;
 