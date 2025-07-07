let angle, angleVel = 0, angleAcc = 0, length, gravity = 0.4;
const origin = {x: 200, y: 50};
let animationId;

function startSimulation(){
  if(animationId) cancelAnimationFrame(animationId);

const lengthVal = parseFloat(document.getElementById("lengthInput").value);
const angleDeg = parseFloat(document.getElementById("angleInput").value);

length = lengthVal;
angle = angleDeg*Math.PI/180;
angleVel = 0;

draw();
}

animationId = requestAnimationFrame(draw);

