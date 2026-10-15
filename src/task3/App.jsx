import React, { useState } from "react";
import "./App.css";

function App() {

  // TODO: Declare the state variables required by the task
  
  // TODO: Implement the convertTemperature function described in the task

  // TODO: Define the handlers for the increase and decrease buttons

  return (
    <div>
      <h2>
        <span data-testid="temp-value">{}</span>
        <span data-testid="temp-unit">{}</span>
      </h2>

      <button
        data-testid="btn-increase"
        onClick={() => {}}
      >
        Increase
      </button>

      <button
        data-testid="btn-decrease"
        onClick={() => {}}
      >
        Decrease
      </button>

      <button
        data-testid="btn-convert"
        onClick={() => {}}
      >
       {}
      </button>
    </div>
  );
}

export default App;
