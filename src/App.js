import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const endTime = new Date('July 13, 2023 00:00:00').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime;
  console.log(gap)

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const remainingDays = Math.floor(gap/day);
  const remaingHours = Math.floor((gap % day) /hour)
  const remainingMinutes = Math.floor((gap % hour) /minute)
  const remainingSeconds = Math.floor((gap % minute) /second)
  
  useEffect(()=>{
    setTimeout(()=> setCurrentTime(new Date().getTime()), 1000)
    if(gap===0){
      alert("Offer Ended")
    }
  }, [currentTime])

  return (
    <div className="App">
      <center>
     <h1> Sales CountDown Timer </h1>
     <h2> Offer Ends in </h2>
     <table>
      <thead>
        <tr className='timings'>
          <td> {remainingDays}</td>&nbsp;
          <td> {remaingHours}</td>&nbsp;
          <td> {remainingMinutes}</td>&nbsp;
          <td> {remainingSeconds}</td>&nbsp;
        </tr>
        <tr>
          <td> DAYS</td> &nbsp;
          <td> HOURS</td>&nbsp;
          <td> MINUTES</td>&nbsp;
          <td> SECONDS</td>&nbsp;
        </tr>
      </thead>
     </table>
     </center>
    </div>
  );
}

export default App;
