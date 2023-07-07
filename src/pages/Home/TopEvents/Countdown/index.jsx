import React, { useState, useEffect } from 'react';
import './style.css';

export const CountdownButton = () => {
  const targetDate = new Date('2023-11-16T00:00:00');
  const [count, setCount] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining(targetDate);
      setCount(remainingTime);

      if (remainingTime.total <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;

    if (timeRemaining <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    return { total: timeRemaining, days, hours, minutes, seconds };
  }

  return (
    <div>
      <div
        disabled={count.total > 0}
        className={count.total <= 0 ? 'hidden' : 'rapresent__btn-countdown'}
      >
        {count.days} dnů {count.hours} hodin
      </div>
      <button className={count.total > 0 ? 'hidden' : 'rapresent__btn'}>
        Jedu
      </button>
    </div>
  );
};
