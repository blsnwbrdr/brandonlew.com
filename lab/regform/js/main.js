/*****
**REGISTRATION FORM
*****/

function submitForm() {
  
  // CLEAR ANY PREVIOUS ERRORS
  document.getElementById('error').innerHTML = '';
  // CHANGE EMPTY INPUTS TO RED AND FILLED INPUTS TO GREY
  var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].value === '') {
      document.getElementsByTagName('input')[i].setAttribute('style','border-color: #D5101B');
    } else {
      document.getElementsByTagName('input')[i].setAttribute('style','border-color: rgba(0,0,0,0.25)');
    }
  }
  
  // INPUT VALUES
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value.toLowerCase();
  var inputTerms = document.getElementById('inputTerms');
  
  // VALIDATE USERNAME (LETTERS, NUMBERS, BETWEEN 5 AND 20 CHARACTERS)
  var valUsername = /^[a-zA-Z0-9]{5,20}$/;
  if(valUsername.test(username) === false) {
    document.getElementById('username').setAttribute('style','border-color: red');
    document.getElementById('error').innerHTML += ('<p>Please check your username</p>');
  }
  // VALIDATE PASSWORD
  var valPassword = /^[a-zA-Z0-9.!@#$%^&*-_]{8,20}$/;
  if(valPassword.test(password) === false) {
    document.getElementById('password').setAttribute('style','border-color: red');
    document.getElementById('error').innerHTML += ('<p>Passwords must have at least 8 characters</p>');
  }
  // VALIDATE CONFIRM PASSWORD
  if(password !== confirmPassword) {
    document.getElementById('confirmPassword').setAttribute('style','border-color: red');
    document.getElementById('error').innerHTML += ('<p>Passwords DO NOT match</p>');
  }
  // VALIDATE PHONE
  var valPhone = /^[0-9]+-[0-9]+-[0-9]/;
  if(valPhone.test(phone) === false) {
    document.getElementById('phone').setAttribute('style','border-color: red'); 
    document.getElementById('error').innerHTML += ('<p>Please check your phone number</p>');
  }
  // VALIDATE EMAIL
  var valEmail = /^[a-z0-9.-_]+@[a-z.-]+\.[a-z]/;
  if(valEmail.test(email) === false) {
    document.getElementById('email').setAttribute('style','border-color: red'); 
    document.getElementById('error').innerHTML += ('<p>You have entered an invalid email</p>');
  }

  // STOP IF ANY INPUTS ARE EMPTY
  for(var x = 0; x < inputs.length; x++) {
    if(inputs[x].value === '') {
      document.getElementById('error').innerHTML += ('<p>All inputs MUST be filled</p>');
      return;
    }
  }
  // STOP IF ANY VALIDATION IS FALSE
  if(valUsername.test(username) === false || valPassword.test(password) === false || password !== confirmPassword || valPhone.test(phone) === false || valEmail.test(email) === false) {
    return;
  }
  // STOP IF CHECKBOX IS NOT CHECKED
  if(inputTerms.checked === false) {
    document.getElementById('error').innerHTML += ('<p>Please confirm you agree with the Terms of Service</p>');
    return;
  }
  document.getElementById('register').setAttribute('style','display: none');
  document.getElementById('body').setAttribute('style', 'background: none');
  document.getElementById('success').innerHTML = ('<h2>Welcome</h2><h3>' + firstName + ' ' + lastName + '</h3><p>Your username: ' + username + '<br>has been created successfully.');
  startGame();
}
// SUBMIT FORM ON BUTTON CLICK
document.getElementById('submit').addEventListener('click', submitForm);

/*****
**GAME
*****/

var gamePiece;
var gameObstacle = [];
// CREATE THE GAME AREA
var gameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if(windowWidth > 768) {
      this.canvas.width = 750;
      this.canvas.height = 420;
    } else if(windowWidth < windowHeight) {
      this.canvas.width = windowWidth;
      this.canvas.height = windowWidth * 0.55;
    } else if(windowWidth > windowHeight) {
      this.canvas.width = windowWidth;
      this.canvas.height = windowHeight;
    }
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNum = 0;
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('mousedown', function () {
      accelerate(-0.2);
    });
    window.addEventListener('mouseup', function () {
      accelerate(0.1);
    });
    window.addEventListener('touchstart', function () {
      accelerate(-0.2);
    });
    window.addEventListener('touchend', function () {
      accelerate(0.1);
    });
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
  this.gravity = 0.05;
  this.gravitySpeed = 0;
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
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  };
  this.hitBottom = function() {
    var bottom = gameArea.canvas.height - this.height;
    if(this.y > bottom) {
      this.y = bottom;
      this.gravitySpeed = 0;
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
// ACCELERATE FUNCTION
function accelerate(n) {
  gamePiece.gravity = n;
}
// REFRESH GAME AREA
function updateGameArea() {
  var x, minHeight, maxHeight, height, minGap, maxGap, gap;
  for(var i = 0; i < gameObstacle.length; i++) {
    if(gamePiece.crashWith(gameObstacle[i])) {
      gameArea.stop();
      return;
    }
  }
  gameArea.clear();
  gameArea.frameNum += 1;
  if(gameArea.framNum === 1 || everyInterval(150)) {
    x = gameArea.canvas.width;
    minGap = 60;
    maxGap = 200;
    minHeight = 20;
    maxHeight = gameArea.canvas.height;    
    gap = Math.floor(Math.random() * (maxGap - minGap)) + minGap;    
    height = Math.floor(Math.random() * ((maxHeight - gap) - minHeight));
    gameObstacle.push(new component(10, height, 'red', x, 0));
    gameObstacle.push(new component(10, maxHeight - gap - height, 'red', x, height + gap));
  }
  for(var z = 0; z < gameObstacle.length; z ++) {
    gameObstacle[z].x += -1;
    gameObstacle[z].update();
  }
  gamePiece.newPos();
  gamePiece.update();
}
// START GAME
function startGame() {
  gameArea.start();
  gamePiece = new component(30, 30, 'img/r2d2_blue.png', 10, 120, 'image');
}
// GAME TESTING
//document.getElementById('register').setAttribute('style','display: none');
//document.getElementById('body').setAttribute('style', 'background: none');
//startGame();
  
  
  
  
  
  
  
  
  
  
  