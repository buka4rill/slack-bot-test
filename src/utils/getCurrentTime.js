const currentTime = () => {
  let date = new Date();
  let hh = date.getHours(); // hours
  let mm = date.getMinutes(); // minutes

  let time = `${hh}:${mm}`;

  let t = setTimeout(() => {
    currentTime();
  }, 1000);
};

module.exports = { currentTime };
