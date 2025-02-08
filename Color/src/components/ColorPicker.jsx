import React from "react";

function ColorPicker({ colorOptions, selectedColor, onColorSelect }) {
  // Handle color selection
  const handleColorSelect = (color) => {
    onColorSelect(color); // Update the selected color in the App component state
  };

  // Handle Reset to default color
  const handleReset = () => {
    onColorSelect("white"); // Reset the selected color to white
  };

  return (
    <div style={{ backgroundColor: selectedColor, padding: "20px", borderRadius: "4px" }}>
      <h2>Pick a Color</h2>
      <div>
        {colorOptions.map((color) => (
          <button
            key={color}
            onClick={() => handleColorSelect(color)}
            style={{ margin: "10px", padding: "50px", backgroundColor: color, color: "black", border: "none", borderRadius: "5px", cursor: "pointer",fontSize:"36px" }}
          >
            {color}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "lightblue",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize:"16px",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ColorPicker;
