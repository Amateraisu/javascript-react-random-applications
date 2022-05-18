
import './App.css';

import DisplayComponent from './components/DisplayComponent';
import BtnDisplayComponent from './components/BtnDisplayComponent';
import React, { useState } from 'react';



function App() {
  const [time, setTime] = useState( { ms: 0 , s:0 , m: 0 , h:0});

  let timeOfStart;
  let timerID;

  function start() {
    timeOfStart = Date.now();

    timerID = requestAnimationFrame(updateTimer);
  }

  function updateTimer() {
    const millisElapsed = Date.now() - timeOfStart;
    const secondsElapsed = millisElapsed / 1000;
    const minutesElapsed = secondsElapsed / 60;
    const hoursElapsed = minutesElapsed /60;

    const millisText = formatNumber(millisElapsed % 1000, 3);
    const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
    const minutesText = formatNumber(Math.floor(minutesElapsed), 2);
    const hoursText = formatNumber(Math.floor(hoursElapsed), 2);

    setTime( {ms: millisText, s:secondsText , m:minutesText, h:hoursElapsed})


    timerID = requestAnimationFrame(updateTimer);
  }

  function formatNumber(number, desiredLength) {
    const stringNumber = String(number);

    return stringNumber.padStart(desiredLength, '0');
}








  return (
    <div className="main-section">
      <div className = "clock-holder">
        <div className = "stopwatch">
          <DisplayComponent time = { time }/>
          <BtnDisplayComponent start = { start }/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
