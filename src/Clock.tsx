import React, { useEffect, useState } from "react";

import "./App.css";

function Clock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const deg = 6;

  const clock = () => {
    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setInterval(clock, 1000);
  return (
    <div className="clock">
      <div className="hour">
        <div className="hr" style={{ transform: hour }} id="hr"></div>
      </div>
      <div className="min">
        <div style={{ transform: minutes }} className="mn" id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" style={{ transform: seconds }} id="sc"></div>
      </div>
      <h1>
        <a href="https://github.com/WWWolverine/Clock" target="_blank">
          My GitHub
        </a>
      </h1>
    </div>
  );
}

export default Clock;
