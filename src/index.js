import css from "./css/style.css";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

function changeColor(arr, elem){
  let num = randomIntegerFromInterval(0, 5)
  let col = arr[num]
  elem.style.backgroundColor = col
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.body
const startBtn = document.body.childNodes[1]
const stpoBtn = document.body.childNodes[3]

stpoBtn.disabled = true
let timerId

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => changeColor(colors, body), 1000)
  startBtn.disabled = true
  stpoBtn.disabled = false
})

stpoBtn.addEventListener('click', () => {
  clearInterval(timerId)
  stpoBtn.disabled = true
  startBtn.disabled = false
})