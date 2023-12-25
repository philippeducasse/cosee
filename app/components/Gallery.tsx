import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('January 30, 2024 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Countdown is over, set all values to 0
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <p>Days: {timeLeft.days}</p>
        <p>Hours: {timeLeft.hours}</p>
        <p>Minutes: {timeLeft.minutes}</p>
        <p>Seconds: {timeLeft.seconds}</p>
      </div>
    </div>
  );
}

export default CountdownTimer;
