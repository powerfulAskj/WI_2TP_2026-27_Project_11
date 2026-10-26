function odliczanie() {
  const today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  const fullYear = today.getFullYear();

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  document.getElementById("zegar").textContent =
    `${day}/${month}/${fullYear} | ${hour}:${minute}:${second}`;

  setTimeout(odliczanie, 1000);
}

odliczanie();
