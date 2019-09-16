document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d') 

  ctx.fillStyle = 'black'; 
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath() 
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle= "green"; 
  ctx.lineWidth = 10;
  ctx.stroke(); 
  ctx.fillStyle = "purple"; 
  ctx.fill() 
});

