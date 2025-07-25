const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let angle, angleVel = 0, angleAcc = 0, length, gravity = 0.4;
const origin = { x: 200, y: 50 };
let animationId;

function startSimulation() {
  if (animationId) cancelAnimationFrame(animationId);

  const lengthVal = parseFloat(document.getElementById("lengthInput").value);
  const angleDeg = parseFloat(document.getElementById("angleInput").value);

  length = lengthVal;
  angle = angleDeg * Math.PI / 180;
  angleVel = 0;

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  angleAcc = (-gravity / length) * Math.sin(angle);
  angleVel += angleAcc;
  angleVel *= 0.99; // damping
  angle += angleVel;

  const bobX = origin.x + length * Math.sin(angle);
  const bobY = origin.y + length * Math.cos(angle);

  // draw line
  ctx.beginPath();
  ctx.moveTo(origin.x, origin.y);
  ctx.lineTo(bobX, bobY);
  ctx.strokeStyle = "#00ffc3";
  ctx.lineWidth = 2;
  ctx.stroke();

  // draw bob
  ctx.beginPath();
  ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#00ffc3";
  ctx.fill();

  animationId = requestAnimationFrame(draw);
}
