/*****
**GAME
*****/

var gamePiece;
var gameObstacle = [];
var windowWidth = $(window).width();
var windowHeight = $(window).height();

// CONFIGURE GAME AREA
var gameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    if(windowWidth > 420) {
      this.canvas.width = 420;
      this.canvas.height = 700;
    } else {
      this.canvas.width = windowWidth;
      this.canvas.height = windowHeight - 100;
    }
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNum = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
};

// COMPONENT CONSTRUCTOR
function component(width, height, color, x, y, type) {
  this.type = type;
  if(type === 'image') {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function() {
    ctx = gameArea.context;
    if(type === 'image') {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.hitLeft();
    this.hitRight();
  };
  this.hitLeft = function() {
    var leftWall = 0;
    if(this.x < leftWall) {
      this.x = leftWall;
    }
  };
  this.hitRight = function() {
    var rightWall = gameArea.canvas.width - this.width;
    if(this.x > rightWall) {
      this.x = rightWall;
    }
  };
  this.crashWith = function(otherObj) {
    var myLeft = this.x;
    var myRight = this.x + (this.width);
    var myTop = this.y;
    var myBottom = this.y + (this.height);
    var otherLeft = otherObj.x;
    var otherRight = otherObj.x + (otherObj.width);
    var otherTop = otherObj.y;
    var otherBottom = otherObj.y + (otherObj.height);
    var crash = true;
    if((myBottom < otherTop) || (myTop > otherBottom) || (myRight < otherLeft) || (myLeft > otherRight)) {
      crash = false;
    }
    return crash;
  }
}

// CREATE INTERVALS
function everyInterval(n) {
  if((gameArea.frameNum / n) % 1 === 0) {
    return true;
  }
  return false;
}

// REFRESH GAME AREA AND COMPONENTS
function updateGameArea() {
  var x;
  var obstacleSpeed = 3;
  for(var i = 0; i < gameObstacle.length; i++) {
    if(gamePiece.crashWith(gameObstacle[i])) {
      gameArea.stop();
      return;
    }
  }
  gameArea.clear();
  gameArea.frameNum += 1;
  if(gameArea.frameNum === 1 || everyInterval(25)) {
    x = Math.floor(Math.random() * (gameArea.canvas.width-5));
    gameObstacle.push(new component(5, 20, 'red', x, 0));
  }
  // INCREASE DIFFICULTY AFTER 10 SECS
  if(gameArea.frameNum > 500) {
    obstacleSpeed = 5;
    if(everyInterval(20)) {
      x = Math.floor(Math.random() * (gameArea.canvas.width-5));
      gameObstacle.push(new component(5, 20, 'red', x, 0));
    }
  }
  // INCREASE DIFFICULTY AFTER 20 SECS
  if(gameArea.frameNum > 1000) {
    obstacleSpeed = 8;
    if(everyInterval(15)) {
      x = Math.floor(Math.random() * (gameArea.canvas.width-5));
      gameObstacle.push(new component(5, 20, 'red', x, 0));
    }
  }
    for(var z = 0; z < gameObstacle.length; z ++) {
    gameObstacle[z].y += obstacleSpeed;
    gameObstacle[z].update();
  }
  gamePiece.newPos();
  gamePiece.update();
}


// CREATE BUTTONS FUNCTION
function createButtons() {
  document.getElementById('main').innerHTML += ('<div id="buttonContainer"><div id="moveLeft"><div id="leftTriangle"></div><div id="leftRectangle"></div></div><div id="moveRight"><div id="rightRectangle"></div><div id="rightTriangle"></div></div></div>');
}

// START GAME FUNCTION
function startGame() {
  gameArea.start();  
  gamePiece = new component(50, 50, 'img/r2d2_blue.png', gameArea.canvas.width / 2 - 25, gameArea.canvas.height - 50, 'image');
}

// CHECK FOR ORIENTATION AND WINDOW SIZE - START GAME ONLY IF PORTRAIT OR THE WINDOW SIZE IS LARGER THAN 420PX
if(windowWidth > 420 && windowWidth < windowHeight) {
  createButtons();
  startGame();
} else if(windowWidth > windowHeight && windowWidth >= 1024) {
  createButtons();
  startGame();
} else if(windowWidth > windowHeight) {
  document.getElementById('main').innerHTML += ('<h1>Please rotate to portrait</h1>');
} else {
  createButtons();
  startGame();
}

// FUNCTIONS TO MOVE THE GAME PIECE LEFT, RIGHT, AND STOP
function moveLeft() {
  gamePiece.speedX -= 2;
}
function moveRight() {
  gamePiece.speedX += 2;
}
function checkKey(e) {
  if(e.keyCode === 37) {
    moveLeft();
  }
  if(e.keyCode === 39) {
    moveRight();
  }
}
function stopMove() {
  gamePiece.speedX = 0;
}

// EVENT LISTENERS
document.getElementById('moveLeft').addEventListener('mousedown', moveLeft);
document.getElementById('moveRight').addEventListener('mousedown', moveRight);
document.getElementById('moveLeft').addEventListener('touchstart', moveLeft);
document.getElementById('moveRight').addEventListener('touchstart', moveRight);
document.getElementById('moveLeft').addEventListener('mouseup', stopMove);
document.getElementById('moveRight').addEventListener('mouseup', stopMove);
document.getElementById('moveLeft').addEventListener('touchend', stopMove);
document.getElementById('moveRight').addEventListener('touchend', stopMove);
window.addEventListener('keydown', checkKey, false);
window.addEventListener('keyup', stopMove);

