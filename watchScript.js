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

function changeText(){
    const text = document.getElementById("text");
  const textValue = text.textContent;
  if (textValue === "Light Mode") {
    text.textContent = "Dark Mode";
  } else {
    text.textContent = "Light Mode";
  }
}


function asignEvents() {
  if (document.readyState == "complete") {
    setInterval(getTime, 1000);

    const checkbox = document.getElementById("modeSwitch");
    checkbox.addEventListener("change", changeMode);
    checkbox.addEventListener("change", changeText);
  }
}
document.addEventListener("readystatechange", asignEvents);
