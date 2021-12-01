function animate(){
  ctx1.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx4.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx5.drawImage(background_lvl2, 0, 0, canvas1.width, canvas1.height);
 
  handleParticles();
  handleObstacles();
  frogger.draw();
  frogger.update();
  ctx4.drawImage(grass, 0, 0, canvas1.width, canvas1.height);

  requestAnimationFrame(animate);
}

function scored() {
  score += 1;
  gameSpeed += 0.05;
  frogger.x = canvas3.width / 2 - frogger.width / 2;
  frogger.y = canvas3.height - frogger.height - 40;
}

animate();

window.addEventListener('keydown', function(e) {
  keys = {};
  keys[e.code] = true;
  if (keys['ArrowUp'] || keys['ArrowDown'] || keys['ArrowLeft'] || keys['ArrowRight']) {
    frogger.jump();
  }
});

window.addEventListener('keyup', function(e) {
  delete keys[e.code];
  frogger.moving = false;
});