function animate(){
  ctx1.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx4.clearRect(0, 0, canvas3.width, canvas3.height);

  handleRipples();
  ctx2.drawImage(background_lvl2, 0, 0, canvas1.width, canvas1.height);
  handleParticles();
 
  handleObstacles();
  handleScoreBoard();
  frogger.draw();
  frogger.update();
  ctx4.drawImage(grass, 0, 0, canvas1.width, canvas1.height);
  frame++;
  requestAnimationFrame(animate);
}

function scored() {
  score += 1;
  gameSpeed += 0.05;
  frogger.x = canvas3.width / 2 - frogger.width / 2;
  frogger.y = canvas3.height - frogger.height - 40;
}

function handleScoreBoard() {
  ctx4.fillStyle = 'black';
  ctx4.strokeStyle = 'black';
  ctx4.font = '15px Verdana';
  ctx4.strokeText('Score: ', 265, 15);
  ctx4.font = '60px Verdana';
  ctx4.fillText(score, 270, 65);
  ctx4.font = '15px Verdana';
  ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175);
  ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 195);
}

function collision(first, second) { 
  return !(first.x > second.x + second.width || 
    first.x + first.width < second.x || 
    first.y > second.y + second.height || 
    first.y + first.height < second.y);
}

function resetGame() {
  frogger.x = canvas3.width / 2 - frogger.width / 2;
  frogger.y = canvas3.height - frogger.height - 40;
  score = 0;
  collisionsCount++;
  gameSpeed = 1;
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