function odliczanie() {
  let today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let fullYear = today.getFullYear();

  let hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute = today.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let second = today.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }
  document.getElementById("zegar").textContent =
    `${day}/${month}/${fullYear} | ${hour}:${minute}:${second}`;

  setTimeout(odliczanie, 1000);
}
odliczanie();
