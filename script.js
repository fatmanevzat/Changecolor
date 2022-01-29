//Choose a random color
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const text = document.querySelector(".textField");

btn1.onclick = () => {
  let random = Math.floor(Math.random() * colors.length);
  let colorIndex = colors[random];
  document.body.style.backgroundColor = colorIndex;
  console.log(colorIndex);
};

btn2.onclick = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  text.textContent = color;
  console.log(color);
};
