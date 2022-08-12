// program to display the date and time
const date = new Date();
const day = date.toDateString();
const time = date.toLocaleTimeString();

document.getElementById("date").textContent = day;

document.getElementById("time").textContent = time;

window.onload(showPosition());