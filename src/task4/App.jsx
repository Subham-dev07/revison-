import React, { useState } from "react";
import "./App.css";

function App() {

  // TODO: Declare the state variables required by the task

  // TODO: Define the handlers for the scoring, wicket and reset buttons

  return (
    <div>
      <h2 data-testid="score-display">
        run/wickets
      </h2>

      {/* TODO: Render the All Out! message when wickets reach 10 */}

      <button
        data-testid="btn-add-1"
        onClick={() => {}}
      >
        Add 1
      </button>

      <button
        data-testid="btn-add-4"
        onClick={() => {}}
      >
        Add 4
      </button>

      <button
        data-testid="btn-add-6"
        onClick={() => {}}
      >
        Add 6
      </button>
    {/*disable the wicket button when wicket reaches 10*/}
      <button
        data-testid="btn-wicket"
        onClick={() => {}}
      >
        Wicket
      </button>

      <button
        data-testid="btn-reset"
        onClick={() => {}}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
