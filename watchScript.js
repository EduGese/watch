function getDate(){

  const months = ["Jan","Feb","Mar","Apr","May",
  "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
  "Friday","Saturday"];

  const todayDate = new Date();

  // const month = months[todayDate.getMonth()];
  // const wordDay = days[todayDate.getDay()];
  // const numberDay = todayDate.getDate();
  // const year = todayDate.getFullYear();

document.getElementById('month').textContent = months[todayDate.getMonth()];
document.getElementById('wordDay').textContent = days[todayDate.getDay()];
document.getElementById('numberDay').textContent = todayDate.getDate();
document.getElementById('year').textContent = todayDate.getFullYear();


}
function getTime() {

  const timeContainer = document.getElementById("time");
  const options = { hour12: false };
  timeContainer.textContent = new Date().toLocaleTimeString(undefined, options);


}
function formatTime(hours, minutes, seconds) {
  return `${hours} : ${minutes} : ${seconds}`;
}
function changeMode() {
  const darkElements = document.querySelectorAll(".dark, .light");
  darkElements.forEach((element) => {
    element.classList.toggle("dark");
    element.classList.toggle("light");
  });
}

function changeText() {
  const text = document.getElementById("text");
  const textValue = text.textContent;
  const caseContainer = document.getElementById("case");
  
  if (textValue === "Light Mode") {
    text.textContent = "Dark Mode";
    text.style.backgroundColor = "black";
    text.style.color = "#ccc";
    caseContainer.style.border = "3px solid black";
  } else {
    text.textContent = "Light Mode";
    text.style.backgroundColor = "#ccc";
    text.style.color = "chocolate";
    caseContainer.style.border = "3px solid chocolate";
  }
}

function asignEvents() {
  if (document.readyState == "complete") {
    setInterval(getTime, 1000);
    getDate();

    const checkbox = document.getElementById("modeSwitch");
    checkbox.addEventListener("change", changeMode);
    checkbox.addEventListener("change", changeText);
  }
}
document.addEventListener("readystatechange", asignEvents);
