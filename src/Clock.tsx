import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import { Itime } from "./Data";

interface DataProps {
  dataDate: Itime;
}

export async function http(reques: string): Promise<any> {
  const responce = await fetch(reques);
  const body = await responce.json();
  return body;
}

function Clock() {
  const [date, setDate] = useState<Itime>();
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchTime() {
    try {
      const responce = await axios.get<Itime>(
        "https://timezoneapi.io/api/timezone/?Europe/Paris&token=adftlEsIMzpABOzXUmjk"
      );
      setDate(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  const deg = 6;

  const clock = () => {
    let hh = date?.data.datetime?.hour_24_wilz * 30;
    let mm = date?.data.datetime?.minutes * deg;
    let ss = date?.data.datetime?.seconds * deg;

    setHour(`rotateZ(${hh + mm / 12}deg)`);
    setMinutes(`rotateZ(${mm}deg)`);
    setSeconds(`rotateZ(${ss}deg)`);
  };
  setTimeout(clock, 1000);

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
