let currentMode = null;
let balls = [];
let letters = "WORKPLAY".split(""); // One for each of 8 balls
let paddle;
let startGame = false;
let pintu;

let cols, rows; // New grid dimensions based on canvas size
let numCircles = 8;
let circleRadius;
let circles = [];
let cellSize;
let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let easingDuration = 500;
let maxPintu = 500;
let pintuStarted = false;

let followers = [];
let dragging = false;
let lastMouse = {x:0, y:0};
let eyeRadius = 15;
let phoneEye = false;

let leftPupilAngle = 90;
let rightPupilAngle = 90;
let leftPupilTarget = 90;
let rightPupilTarget = 90;

let started = false;
let orientation = false;
let permissionButton;
let rX;
let rY;
let targetX, targetY;

let particles = [];
let initialCount = 8;
let maxParticles = 200;
let particleRadius = 12;
let customColors = ['#FF414A', '#FFAA02', '#FADB06', '#43BA68', '#3DBEFF', '#8F77FB', '#BD40DE', '#FF54BDFF'];

let img;


function preload() {
  pintu = loadImage("favicon.png");
  img = loadImage('beach-ball.png'); // 👈 your image here
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.touchStarted(touchStarted); // explicitly bind

  document.getElementById('default').addEventListener('click', () => setMode('function1'));
  document.getElementById('secondd').addEventListener('click', () => setMode('function2'));
  document.getElementById('third').addEventListener('click', () => setMode('function3'));
  document.getElementById('fourth').addEventListener('click', () => setMode('function4'));
}

function draw() {
  
  
  if(!currentMode) {
    enterFunction1();
    currentMode = loopFunction1;
    currentMode();
  }
  if (currentMode) {
    currentMode();
  }
}

function setMode(modeName) {
  if (modeName === 'function1') {
    enterFunction1();
    document.getElementById('default').style.backgroundColor = '#343232';
    document.getElementById('secondd').style.backgroundColor = 'transparent';
    document.getElementById('third').style.backgroundColor = 'transparent';
    document.getElementById('fourth').style.backgroundColor = 'transparent';
    currentMode = loopFunction1;
  } else if (modeName === 'function2') {
    enterFunction2();
    document.getElementById('default').style.backgroundColor = 'transparent';
    document.getElementById('secondd').style.backgroundColor = '#343232';
    document.getElementById('third').style.backgroundColor = 'transparent';
    document.getElementById('fourth').style.backgroundColor = 'transparent';
    currentMode = loopFunction2;
  } else if (modeName === 'function3') {
    enterFunction3();
    document.getElementById('default').style.backgroundColor = 'transparent';
    document.getElementById('secondd').style.backgroundColor = 'transparent';
    document.getElementById('third').style.backgroundColor = '#343232';
    document.getElementById('fourth').style.backgroundColor = 'transparent';
    currentMode = loopFunction3;
  } else if (modeName === 'function4') {
    enterFunction4();
    document.getElementById('default').style.backgroundColor = 'transparent';
    document.getElementById('secondd').style.backgroundColor = 'transparent';
    document.getElementById('third').style.backgroundColor = 'transparent';
    document.getElementById('fourth').style.backgroundColor = '#343232';
    currentMode = loopFunction4;
  }
}

function enterFunction1() {
  console.log("Function 1 triggered!");
  // moveX = 0;
  startGame = false;

  document.getElementById('default').style.backgroundColor = '#343232';
  document.getElementById('secondd').style.backgroundColor = 'transparent';
  document.getElementById('third').style.backgroundColor = 'transparent';
  document.getElementById('fourth').style.backgroundColor = 'transparent';
  
  // Initialize multiple balls
  balls = [];
  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      balls.push({

        x: 103,
        y: 148,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 1) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 2) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 3) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 4) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 5) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 6) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    } else if (i === 7) {
      balls.push({

        x: (width / 2) - 4*40 + i*40,
        y: i % 2 === 0 ? (height / 2) - 15 : (height / 2) + 15,

        radius: 15,
        targetRadius: 15,
        xSpeed: random([-5, 5]),
        ySpeed: random(-3, -1),
        letter: letters[i],
        bgColor: i < 4 ? '#000000' : '#FFFFFF',
        textColor: i < 4 ? '#FFFFFF' : '#000000'

      });
    }

    
  }

  paddle = {
    width: 120,
    height: 20,
    x: width / 2 - 60,
    y: height - 60,
    speed: 10
  };
}

function loopFunction1() {
  background('#FFD60D');
  noStroke();
  
  paddle.x = mouseX;
  paddle.x = constrain(paddle.x, 0, width - paddle.width);
  fill('white');
  rect(paddle.x, paddle.y, paddle.width, paddle.height);

  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    
    if (startGame) {
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
    }
    

    // Bounce off paddle
    if (
      ball.y + ball.radius > paddle.y &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      ball.ySpeed *= -1;
      ball.y = paddle.y - ball.radius;
      
      // Increase target radius
      ball.targetRadius = ball.radius + 25; // or however much you want to grow
      ball.targetRadius = min(ball.targetRadius, 100); // don't grow forever
    }
    
    // Bounce off walls
    if (ball.x < ball.targetRadius || ball.x > width - ball.targetRadius) {
      ball.xSpeed *= -1;
    }
    if (ball.y < ball.targetRadius) {
      ball.ySpeed *= -1;
    }

    // Ball falls off bottom
    if (ball.y - ball.radius > height-60) {
      balls.splice(i, 1); // Remove the ball
      continue;
    }

    ball.radius = lerp(ball.radius, ball.targetRadius, 0.1); // smooth growth
    
    
    fill(ball.bgColor);
    ellipse(ball.x, ball.y, ball.radius * 2);

    fill(ball.textColor);
    textAlign(CENTER, CENTER);
    textSize(ball.radius);
    text(ball.letter, ball.x, ball.y);
    

  }

  // Restart if all balls are lost
  if (balls.length === 0) {
    enterFunction1();
    return;
  }
}

function enterFunction2() {
  console.log("Function 2 triggered!");
  
  pintuStarted = false;
  
  if (width > height) cellSize = width / 50;
  else cellSize = height / 25;
  
  
  cols = Math.floor(width / cellSize);
  rows = Math.floor(height / cellSize);

  circleRadius = cellSize / 2;
  console.log(circleRadius, cols, rows);
  circles = [];
  initializeCircles();
}

function loopFunction2() {
  background('#0A2C20');
  if(pintuStarted) updateCircles();
  
  drawCircles();
}

function enterFunction3() {
  console.log("Function 3 triggered!");
  followers = [];

  angleMode(DEGREES);

  followers.push(new FunctionFollower(0, drawShapeA));
  followers.push(new FunctionFollower(1, drawShapeB));
  followers.push(new FunctionFollower(2, drawShapeC));
  followers.push(new FunctionFollower(3, drawShapeD));
}

function loopFunction3() {
  background('#111009');
  
  

  for (let f of followers) {
    f.update();
    f.display();
  }
  
  for (let i = 0; i < followers.length; i++) {
    for (let j = i + 1; j < followers.length; j++) {
      separateFollowers(followers[i], followers[j]);
    }
  }
}

function enterFunction4() {
  console.log("Function 4 triggered!");
  particles = [];
  
  colorMode(RGB);
  imageMode(CENTER);
  noStroke();

  // First 8 particles: beach ball image
  for (let i = 0; i < initialCount; i++) {
    particles.push(new Particle(random(width), random(height), particleRadius, null, null, null, img));
  }
}

function loopFunction4() {
  background('#FFFFF5');
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].checkEdges();
    particles[i].display();
  }
}

function initializeCircles() {
  let center = createVector(Math.floor(cols / 2), Math.floor(rows / 2));
  let gridPositions = [];

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      gridPositions.push(createVector(x, y));
    }
  }

  gridPositions.sort((a, b) => {
    return dist(a.x, a.y, center.x, center.y) - dist(b.x, b.y, center.x, center.y);
  });

  for (let i = 0; i < numCircles; i++) {
    let pos = gridPositions[i];
    let x = pos.x * cellSize + cellSize / 2;
    let y = pos.y * cellSize + cellSize / 2;
    circles.push({
      x: x,
      y: y,
      gridX: pos.x,
      gridY: pos.y,
      targetX: x,
      targetY: y,
      startTime: millis(),
      moveCount: 0,  // Track how many moves this circle has made
      history: [createVector(pos.x, pos.y)]
    });
  }
}

function updateCircles() {
  let now = millis();

  let newCircles = [];

for (let i = 0; i < circles.length; i++) {
  let circle = circles[i];

  if (now - circle.startTime > easingDuration) {
    let neighbors = [];

    for (let dir of directions) {
      let newX = circle.gridX + dir[0];
      let newY = circle.gridY + dir[1];

      if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
        neighbors.push(createVector(newX, newY));
      }
    }

    neighbors = neighbors.filter(pos =>
      !circles.some(c => c.gridX === pos.x && c.gridY === pos.y)
    );

    if (neighbors.length > 0) {
      let newPos = random(neighbors);

      circle.targetX = newPos.x * cellSize + cellSize / 2;
      circle.targetY = newPos.y * cellSize + cellSize / 2;
      circle.history.push(createVector(circle.gridX, circle.gridY));
      circle.gridX = newPos.x;
      circle.gridY = newPos.y;
      circle.startTime = millis();
      circle.moveCount = (circle.moveCount || 0) + 1;

      // ✅ DUPLICATION LOGIC
      if (circle.moveCount % 3 === 0) {
        // Find a nearby free neighbor to spawn the clone
        let cloneNeighbors = directions
          .map(d => createVector(circle.gridX + d[0], circle.gridY + d[1]))
          .filter(pos =>
            pos.x >= 0 && pos.x < cols && pos.y >= 0 && pos.y < rows &&
            !circles.some(c => c.gridX === pos.x && c.gridY === pos.y) &&
            !newCircles.some(c => c.gridX === pos.x && c.gridY === pos.y)
          );

        if (cloneNeighbors.length > 0) {
          let clonePos = random(cloneNeighbors);
          let cx = clonePos.x * cellSize + cellSize / 2;
          let cy = clonePos.y * cellSize + cellSize / 2;

          // Start at parent's position, animate out
          newCircles.push({
            x: circle.x,
            y: circle.y,
            gridX: clonePos.x,
            gridY: clonePos.y,
            targetX: cx,
            targetY: cy,
            startTime: millis(),
            history: [createVector(clonePos.x, clonePos.y)],
            moveCount: 0
          });
        }
      }
    }
  }

  let elapsed = min((now - circle.startTime) / easingDuration, 1);
  let ease = quartInOut(elapsed);
  circle.x = lerp(circle.x, circle.targetX, ease);
  circle.y = lerp(circle.y, circle.targetY, ease);
}
if (circles.length + newCircles.length > maxPintu) return;
// Append the new clones to the main array
circles = circles.concat(newCircles);
}

function drawCircles() {
  push();
  fill('#FFD60D');
  noStroke();
  imageMode(CENTER);

  for (let circle of circles) {
    for (let pos of circle.history) {
      let hx = pos.x * cellSize + cellSize / 2;
      let hy = pos.y * cellSize + cellSize / 2;
      //image(pintu, hx, hy, circleRadius * 2, circleRadius * 2);
    }

    image(pintu, circle.x, circle.y, circleRadius * 2, circleRadius * 2);
  }
  pop();
}

function quartInOut(t) {
  if (t < 0.5) {
    return 8 * t * t * t * t;
  } else {
    let f = t - 1;
    return -8 * f * f * f * f + 1;
  }
}
function separateFollowers(a, b) {
  let minDist = 150; // minimum horizontal spacing
  let dx = b.pos.x - a.pos.x;
  let distance = abs(dx);

  if (distance < minDist) {
    let overlap = (minDist - distance) / 2;
    let direction = dx > 0 ? 1 : -1; // which way to push

    // Only adjust x position
    a.pos.x -= direction * overlap;
    b.pos.x += direction * overlap;
  }
}

function touchStarted(event) {
  phoneEye = true;
  pintuStarted = true;

  let touch = event.touches[0];

  // Check what element is under the touch point
  let touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);

  // If touch is NOT directly on the canvas element, don't trigger sketch logic
  if (touchedElement !== canvas.elt) {
    return true; // allow button clicks, links etc.
  }

  // Otherwise, trigger canvas interaction
  mousePressed();

  // Simulate mouse release after 3 seconds
  setTimeout(() => {
    dragging = false;
    phoneEye = false;
    mouseReleased();
  }, 4000);

  return false; // block default only if it's actually the canvas
}

function mousePressed() {
  startGame = true;
  dragging = true;
  lastMouse.x = mouseX;
  lastMouse.y = mouseY;
  
  pintuStarted = true;

  for (let f of followers) {
    f.settled = false;
    if (f.drawFunction === drawShapeA || f.drawFunction === drawShapeC) {
      f.droopStartTime = millis();
    }
  }
  
  let newParticles = [];

  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].isClicked(mouseX, mouseY)) {
      if (particles.length + 8 <= maxParticles) {
        let parent = particles.splice(i, 1)[0];

        for (let j = 0; j < 8; j++) {
          let angle = random(TWO_PI);
          let speed = random(1, 2);
          let newColor;
          let newRadius = random(10, 20); // ✅ random radius for new particles

          if (parent.image) {
            // First split: from image to solid color
            newColor = color(customColors[j % customColors.length]);
          } else {
            // Further splits: same hue, random saturation/brightness
            colorMode(HSB);
            let h = hue(parent.col);
            let s = random(60, 100);       // Varying saturation
            let b = random(60, 100);       // Varying brightness
            newColor = color(h, s, b);
            colorMode(RGB); // Reset
          }

          newParticles.push(new Particle(parent.pos.x, parent.pos.y, newRadius, angle, speed, newColor));
        }
      }
      break;
    }
  }

  particles = particles.concat(newParticles);
}

// function mouseDragged() {
//   leftPupilTarget = atan2(mouseY - leftY, mouseX - leftX);
//   rightPupilTarget = atan2(mouseY - rightY, mouseX - rightX);
// }

function mouseReleased() {
  dragging = false;
}

class FunctionFollower {
  constructor(index, drawFunction) {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.angle = 0;
    this.drawFunction = drawFunction;
    this.offset = 60 + index * 50;
    this.maxSpeed = 7;
    this.maxForce = 0.3;
    this.t = random(1000);
    this.settled = false;
    this.gravity = createVector(0, 0.08);
    
    
    

    // 👁️ Pupil state
    this.leftPupilAngle = 90;
    this.rightPupilAngle = 90;
    this.leftPupilTarget = 90;
    this.rightPupilTarget = 90;
    
    this.droopStartTime = null;
    this.droopOffset = 0;
    this.maxDroop = 10;
  }

  update() {
    this.t += 0.01;
    
    
    
    if (dragging) {
        let elapsed = millis() - this.droopStartTime;
        if (elapsed > 4000 && this.drawFunction === drawShapeA ) {
          // Smooth droop using easing
          this.droopOffset = lerp(this.droopOffset, this.maxDroop, 0.05);
        } else if (elapsed > 3000 && this.drawFunction === drawShapeC ) {
          if(frameCount % 8 === 0) this.maxDroop = random(4,10);
          this.droopOffset = this.maxDroop;
        } else if (elapsed > 2000 && this.drawFunction === drawShapeA && phoneEye === true ) {
          // Smooth droop using easing
          this.droopOffset = lerp(this.droopOffset, this.maxDroop, 0.05);
        } else if (elapsed > 1500 && this.drawFunction === drawShapeC && phoneEye === true) {
          // Smooth droop using easing
          if(frameCount % 8 === 0) this.maxDroop = random(4,10);
          this.droopOffset = this.maxDroop;
        }
        
      } else {
        // Return eyelid when not dragging
        this.droopOffset = lerp(this.droopOffset, 0, 0.1);
        if(this.drawFunction === drawShapeA) this.droopOffset = lerp(this.droopOffset, this.maxDroop, 0.05);
      }

    if (dragging) {
      let target = createVector(mouseX, mouseY);
      let desired = p5.Vector.sub(target, this.pos);

      if (desired.mag() > this.offset) {
        desired.setMag(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        this.acc.add(steer);
      }

      this.angle = this.vel.heading() * 0.1;
    } else if (!this.settled) {
      this.acc.add(this.gravity);
      this.angle *= 0.95;

      if (this.pos.y >= height - 50) {
        this.pos.y = height - 50;
        this.vel.mult(0);
        this.acc.mult(0);
        this.settled = true;
      }
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    this.pos.x = constrain(this.pos.x, eyeRadius * 2, width - eyeRadius *2);
    this.pos.y = constrain(this.pos.y, eyeRadius * 2, height - eyeRadius *2);
  }

  display() {
    push();
    
    translate(this.pos.x, this.pos.y);
      
    rotate(this.angle);
    this.drawFunction(this);  // pass self to draw function
    pop();
  }
}

// ---- Shape Functions with Micro Motion ----

function drawShapeA(follower) {
  push();
  
  if (!dragging) { 
    follower.leftPupilTarget = 90;
    follower.rightPupilTarget = 90;
  }
  

  if (dragging) {
    let leftEyeCenterX = follower.pos.x - eyeRadius;
    let leftEyeCenterY = follower.pos.y;
    let rightEyeCenterX = follower.pos.x + eyeRadius;
    let rightEyeCenterY = follower.pos.y;

    follower.leftPupilTarget = atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    follower.rightPupilTarget = atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
  }

  follower.leftPupilAngle = lerpAngle(follower.leftPupilAngle, follower.leftPupilTarget, 0.1);
  follower.rightPupilAngle = lerpAngle(follower.rightPupilAngle, follower.rightPupilTarget, 0.1);

  fill(255);
  noStroke();
  ellipse(-eyeRadius, 0, eyeRadius * 2, eyeRadius * 2);
  ellipse(eyeRadius, 0, eyeRadius * 2, eyeRadius * 2);
  
  let lidOffset = eyeRadius; // base distance from center

  // LEFT EYE

  // Upper lid
  push();
  translate(-eyeRadius, 0);
  translate(0, -lidOffset + follower.droopOffset); // goes down over time
  fill('#111009');
  noStroke();
  arc(0, 0, eyeRadius * 2, eyeRadius * 2, 180, 360, CHORD);
  pop();

  // Lower lid
  // push();
  // translate(-25, 0);
  // translate(0, lidOffset - follower.droopOffset); // goes up over time
  // fill(0);
  // noStroke();
  // arc(0, 0, 50, 50, 0, 180, CHORD);
  // pop();


  // RIGHT EYE

  // Upper lid
  push();
  translate(eyeRadius, 0);
  translate(0, -lidOffset + follower.droopOffset);
  fill('#111009');
  noStroke();
  arc(0, 0, eyeRadius * 2, eyeRadius * 2, 180, 360, CHORD);
  pop();

  // Lower lid
  // push();
  // translate(25, 0);
  // translate(0, lidOffset - follower.droopOffset);
  // fill(0);
  // noStroke();
  // arc(0, 0, 50, 50, 0, 180, CHORD);
  // pop();

  let pupilRadius = 12.5;
  let leftPx = cos(follower.leftPupilAngle) * pupilRadius;
  let leftPy = sin(follower.leftPupilAngle) * pupilRadius;
  let rightPx = cos(follower.rightPupilAngle) * pupilRadius;
  let rightPy = sin(follower.rightPupilAngle) * pupilRadius;

  fill('#111009');
  ellipse(-eyeRadius + leftPx, 0 + leftPy, eyeRadius, eyeRadius);
  ellipse(eyeRadius + rightPx, 0 + rightPy, eyeRadius, eyeRadius);

  pop();
}

function drawShapeB(follower) {
  push();
  
  if (!dragging) { 
    follower.leftPupilTarget = 90;
    follower.rightPupilTarget = 90;
  }
  

  if (dragging) {
    let leftEyeCenterX = follower.pos.x - eyeRadius;
    let leftEyeCenterY = follower.pos.y;
    let rightEyeCenterX = follower.pos.x + eyeRadius;
    let rightEyeCenterY = follower.pos.y;

    follower.leftPupilTarget = atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    follower.rightPupilTarget = atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
  }

  follower.leftPupilAngle = lerpAngle(follower.leftPupilAngle, follower.leftPupilTarget, 0.1);
  follower.rightPupilAngle = lerpAngle(follower.rightPupilAngle, follower.rightPupilTarget, 0.1);

  fill(255);
  noStroke();
  ellipse(-eyeRadius, 0, eyeRadius*2, eyeRadius*2);
  ellipse(eyeRadius, 0, eyeRadius*2, eyeRadius*2);

  let pupilRadius = eyeRadius/2;
  let leftPx = cos(follower.leftPupilAngle) * pupilRadius;
  let leftPy = sin(follower.leftPupilAngle) * pupilRadius;
  let rightPx = cos(follower.rightPupilAngle) * pupilRadius;
  let rightPy = sin(follower.rightPupilAngle) * pupilRadius;

  fill('#111009');
  ellipse(-eyeRadius + leftPx, 0 + leftPy, 5*eyeRadius/3, 5*eyeRadius/3);
  ellipse(eyeRadius + rightPx, 0 + rightPy, 5*eyeRadius/3, 5*eyeRadius/3);
  fill(255);
  ellipse(-10 + leftPx, leftPy, 10, 10);
  ellipse(20 + rightPx, rightPy, 10, 10);
  ellipse(-20 + leftPx, leftPy + 4, 4, 4);
  ellipse(8 + rightPx, rightPy + 4, 4, 4);

  pop();
}

function drawShapeC(follower) {
  push();
  
  if (!dragging) { 
    follower.leftPupilTarget = 90;
    follower.rightPupilTarget = 90;
  }
  

  if (dragging) {
    let leftEyeCenterX = follower.pos.x - eyeRadius/2 + 5;
    let leftEyeCenterY = follower.pos.y;
    let rightEyeCenterX = follower.pos.x + eyeRadius;
    let rightEyeCenterY = follower.pos.y;

    follower.leftPupilTarget = atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    follower.rightPupilTarget = atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
  }

  follower.leftPupilAngle = lerpAngle(follower.leftPupilAngle, follower.leftPupilTarget, 0.1);
  follower.rightPupilAngle = lerpAngle(follower.rightPupilAngle, follower.rightPupilTarget, 0.1);

  fill(255);
  noStroke();
  ellipse(-eyeRadius/2 - 5, 0, eyeRadius +5, eyeRadius+5);
  ellipse(eyeRadius, 0, eyeRadius*2, eyeRadius*2);
  
  let lidOffset = eyeRadius; // base distance from center

  // LEFT EYE

  // Upper lid
  push();
  translate(-eyeRadius, 0);
  translate(0, -lidOffset + follower.droopOffset); // goes down over time
  fill('#111009');
  noStroke();
  arc(0, 0, eyeRadius*2, eyeRadius*2, 180, 360, CHORD);
  pop();
  
  // Lower lid
  push();
  translate(-eyeRadius, 0);
  translate(0, lidOffset - follower.droopOffset); // goes up over time
  fill('#111009');
  noStroke();
  arc(0, 0, eyeRadius*2, eyeRadius*2, 0, 180, CHORD);
  pop();
  
  // RIGHT EYE

  // Upper lid
//   push();
//   translate(25, 0);
//   translate(0, -lidOffset + follower.droopOffset);
//   fill(0);
//   noStroke();
//   arc(0, 0, 50, 50, 180, 360, CHORD);
//   pop();

//   // Lower lid
//   push();
//   translate(25, 0);
//   translate(0, lidOffset - follower.droopOffset);
//   fill(0);
//   noStroke();
//   arc(0, 0, 50, 50, 0, 180, CHORD);
//   pop();

  let pupilRadius = eyeRadius/2;
  let leftPx = cos(follower.leftPupilAngle) * pupilRadius;
  let leftPy = sin(follower.leftPupilAngle) * pupilRadius;
  let rightPx = cos(follower.rightPupilAngle) * pupilRadius;
  let rightPy = sin(follower.rightPupilAngle) * pupilRadius;

  fill('#111009');
  ellipse(-eyeRadius + leftPx, 0 + leftPy, 10, 10);
  ellipse(eyeRadius + rightPx, 0 + rightPy, 20, 20);
  

  pop();
}

function drawShapeD(follower) {
  push();
  
  if (!dragging) { 
    follower.leftPupilTarget = 90;
    follower.rightPupilTarget = 90;
  }
  

  if (dragging) {
    let leftEyeCenterX = follower.pos.x - eyeRadius;
    let leftEyeCenterY = follower.pos.y;
    let rightEyeCenterX = follower.pos.x + eyeRadius;
    let rightEyeCenterY = follower.pos.y;

    follower.leftPupilTarget = atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    follower.rightPupilTarget = atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
  }

  follower.leftPupilAngle = lerpAngle(follower.leftPupilAngle, follower.leftPupilTarget, 0.1);
  follower.rightPupilAngle = lerpAngle(follower.rightPupilAngle, follower.rightPupilTarget, 0.1);

  fill(255);
  noStroke();
  ellipse(-eyeRadius, 0, eyeRadius*2, eyeRadius*2);
  ellipse(eyeRadius, 0, eyeRadius*2, eyeRadius*2);

  let pupilRadius = 12.5;
  let leftPx = cos(follower.leftPupilAngle) * pupilRadius;
  let leftPy = sin(follower.leftPupilAngle) * pupilRadius;
  let rightPx = cos(follower.rightPupilAngle) * pupilRadius;
  let rightPy = sin(follower.rightPupilAngle) * pupilRadius;

  fill('#111009');
  ellipse(-eyeRadius + leftPx, 0 + leftPy, eyeRadius, eyeRadius);
  ellipse(eyeRadius + rightPx, 0 + rightPy, eyeRadius, eyeRadius);

  pop();
}

function lerpAngle(a, b, t) {
  let diff = b - a;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return a + diff * t;
}

class Particle {
  constructor(x, y, r, angle, speed, col, image = null) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = p5.Vector.fromAngle(angle || random(TWO_PI)).mult(speed || random(1, 2));
    this.mass = this.r * 0.1;
    this.col = col; // If null, use image
    this.image = image;
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    push();
    if (this.image && !this.col) {
      blendMode(BLEND); // default blend for images
      image(this.image, this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    } else {
      blendMode(MULTIPLY); // multiply blend for colored particles
      fill(this.col);
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
    pop();
  }

  checkEdges() {
    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      this.vel.x *= -1;
      this.pos.x = constrain(this.pos.x, this.r, width - this.r);
    }
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }
  }

  isClicked(mx, my) {
    return dist(mx, my, this.pos.x, this.pos.y) < this.r;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}