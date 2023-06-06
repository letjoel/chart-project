import { useState } from "react";
import "./App.css";
import LinesChart from "./charts/LinesChart";
import BarsChart from "./charts/BarsChart";
import PiesChart from "./charts/PiesChart";

function App() {
  return (
    <>
      <div>
        <h1>Charts</h1>
        <div>
          <p>
            <b>Example #1: </b>
          </p>
          <div style={{ width: "450px", height: "230px" }}>
            <LinesChart />
          </div>
        </div>
        <hr />
        <div>
          <p>
            <b>Example #2: </b>
          </p>
          <div style={{ width: "450px", height: "225px" }}>
            <BarsChart />
          </div>
        </div>
        <hr />
        <div>
          <p>
            <b>Example #3: </b>
          </p>
          <div style={{ width: "450px", height: "250px" }}>
            <div style={{ width: "100%", height: "100%", padding: "10px 0" }}>
              <PiesChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
