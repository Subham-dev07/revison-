import React, { useState} from "react";
import "./App.css";

function TextColorChanger() {

  // TODO: Declare the state variables required by the task


  // TODO: Define the click handlers for the two buttons

  return (
    <div>

      {/* TODO: Render the heading and the two buttons as described in the task */}
      <h1
        data-testid="count-display"
        style={{ }}
      >
        Count: 
      </h1>

      <button
        data-testid="btn-increase"
      >
        Increase
      </button>

      <button
        data-testid="btn-reset"
      >
        Reset
      </button>
      
    </div>
  );
}

export default TextColorChanger;
