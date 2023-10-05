function getDate(){

  const months = ["January","February","March","April","May",
  "June","July","August","September","October","November","December"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
  "Friday","Saturday"];

  
  const todayDate = new Date();

  let month = months[todayDate.getMonth()];
  let day = days[todayDate.getDay()];

  console.log(month);
  console.log(day);
  console.log(todayDate.getFullYear());

}
function getTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const time = formatTime(hours, minutes, seconds);

  const timeContainer = document.getElementById("time");
  timeContainer.textContent = time;
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
