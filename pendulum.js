const angleSlider = document.getElementById("angleSlider");
const lengthSlider = document.getElementById("lengthSlider");

let angle = (parseFloat(angleSlider.value) * Math.PI) / 180;
let length = parseFloat(lengthSlider.value);

angleSlider.addEventListener("input", () => {
  angle = (parseFloat(angleSlider.value) * Math.PI) / 180;
});

lengthSlider.addEventListener("input", () => {
  length = parseFloat(lengthSlider.value);
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let angleVel = 0;
let angleAcc = 0;
let gravity = 0.4;

const origin = { x: canvas.width / 2, y: 50 };
let animationId;

let isRunning = false;

function startSimulation() {
  const button = document.getElementById("startButton");

  if (isRunning) {
    cancelAnimationFrame(animationId);
    isRunning = false;
    button.textContent = "Start";
    return;
  }

  const lengthVal = parseFloat(document.getElementById("lengthSlider").value);
  const angleDeg = parseFloat(document.getElementById("angleSlider").value);

  length = lengthVal;
  angle = angleDeg * Math.PI / 180;
  angleVel = 0;

  isRunning = true;
  button.textContent = "Stop";
  draw();
}
document.getElementById("startButton").addEventListener("click", startSimulation);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  angleAcc = (-gravity / length) * Math.sin(angle);
  angleVel += angleAcc;
  angleVel *= 0.99; // damping
  angle += angleVel;

  const bobX = origin.x + length * Math.sin(angle);
  const bobY = origin.y + length * Math.cos(angle);
 
  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(bobX, bobY);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();

  animationId = requestAnimationFrame(draw);
    
}

