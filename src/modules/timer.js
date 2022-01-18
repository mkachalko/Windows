const timer = (deadline) => {
  const timerDays = document.getElementById("count-days");
  const timerHours = document.getElementById("count-hours");
  const timerMinutes = document.getElementById("count-minutes");
  const timerSeconds = document.getElementById("count-seconds");

  let interval;

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateTime = () => {
    const getTime = getTimeRemaining();

    for (let key in getTime) {
      switch (true) {
        case getTime[key] < 10 && getTime[key] > 0:
          getTime[key] = "0" + getTime[key];
          break;
        case getTime[key] <= 0:
          getTime[key] = "00";
          break;
      }
    }

    timerDays.textContent = getTime.days;
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining <= 0 && interval) {
      clearInterval(interval);
    }
  };

  updateTime();
  interval = setInterval(updateTime, 1000);
};

export default timer;
