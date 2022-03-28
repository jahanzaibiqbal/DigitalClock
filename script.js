function clock() {
  var clock = new Date();
  var hr = document.getElementById("hours");
  var min = document.getElementById("minutes");
  var sec = document.getElementById("seconds");

  var h = clock.getHours();
  var m = clock.getMinutes();
  var s = clock.getSeconds();

  hr.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;

  //  ==========================  Day========================================>

  var currentDay = document.getElementById("current-day");

  var cDay = clock.getDay();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  cDay = weekday[clock.getDay()];
  currentDay.innerHTML = cDay;

  //  ==========================  Date========================================>

  const monthName = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month = document.getElementById("month");
  var tempMonth = monthName[clock.getMonth()];
  month.innerHTML = tempMonth;

  var date = document.getElementById("date");
  var tempDate = clock.getDate();
  date.innerHTML = tempDate;

  var year = document.getElementById("year");
  var tempYear = clock.getFullYear();
  year.innerHTML = tempYear;
}

setInterval(clock, 1000);
