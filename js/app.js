let water = 80;
let maxHi = 20;
let sliv = 0;
var rotate = 0;
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 400
        }
      },
      "color": {
        "value": "#0000FF"
      },
      "shape": {
        "type": "stick",
        "stroke": {
          "width": 0,
          "color": "#0000FF"
        },
        "polygon": {
          "nb_sides": 4
        },
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 40,
        "direction": "bottom",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse",
          "parallax": {
            "enable": true,
            "force": 60,
            "smooth": 10
          }
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
var cont = document.getElementById("wrapper");
var c = document.getElementById('wave'),
    ctx = c.getContext('2d'),
    cw = c.width = window.innerWidth,
    ch = c.height = window.innerHeight,
    points = [],
    tick = 0,
    opt = {
      count: 5,
      range: {
        x: 50,
        y: 100
      },
      duration: {
        min: 20,
        max: 40
      },
      thickness: 10,
      strokeColor: '#0000FF',
      level: .7,
      curved: false
    },
    rand = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    },
    ease = function (t, b, c, d) {
	    if ((t/=d/2) < 1) return c/2*t*t + b;
	    return -c/2 * ((--t)*(t-2) - 1) + b;
    };

ctx.lineJoin = 'round';
ctx.lineWidth = opt.thickness;
ctx.strokeStyle = opt.strokeColor;

var Point = function(config){
  this.anchorX = config.x;
  this.anchorY = config.y;
  this.x = config.x;
  this.y = config.y;
  this.setTarget();  
};

Point.prototype.setTarget = function(){
  this.initialX = this.x;
  this.initialY = this.y;
  this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
  this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
  this.tick = 0;
  this.duration = rand(opt.duration.min, opt.duration.max);
}
  
Point.prototype.update = function(){
  var dx = this.targetX - this.x;
  var dy = this.targetY - this.y;
  var dist = Math.sqrt(dx * dx + dy * dy);
  
  if(Math.abs(dist) <= 0){
    this.setTarget();
  } else {       
    var t = this.tick;
    var b = this.initialY;
    var c = this.targetY - this.initialY;
    var d = this.duration;
    this.y = ease(t, b, c, d);
    
    b = this.initialX;
    c = this.targetX - this.initialX;
    d = this.duration;
    this.x = ease(t, b, c, d);
    if (sliv == 0){
    water-=0.01;
    maxHi+=0.01;
    }
    if (water <= 0){
      sliv = 1;
    }
    if (water < 80 && sliv == 1) {
var canvas = document.getElementById('tutorial2');
var ctx = canvas.getContext('2d');
godraw();

function godraw() {
    updateAnimation();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    
    ctx.rotate(rotate);
    ctx.beginPath();
    ctx.fillStyle = '#fff200';
    ctx.arc(0,0, 75, 0, 2*Math.PI, false);
    ctx.fill();
 
    var rotate2 = 0;
    for( var i = 0; i < 8; i++) {
        ctx.save(); 
        ctx.fillStyle = "#c99e04"
        ctx.rotate(rotate2);
        ctx.translate(75, 0);
        if (i % 2 == 0)
            ctx.fillRect(0,0,35,2);
        else
            ctx.fillRect(0,0,25,2);            
        ctx.restore();
        rotate2 += (2*Math.PI) / 8;
    }
    ctx.restore();
}

function updateAnimation() {
    rotate += Math.PI / 200;
}
      water += 0.1;
      maxHi -=0.1;
      if (water == 80.09999999999572){
        water = 80;
        maxHi = 20;
        sliv = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

  cont.style.top=water+"%";
  cont.style.height = maxHi + "%";
    this.tick++;
  }
};
    
Point.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
  ctx.fillStyle = '##0000FF';
  ctx.fill();
};

var updatePoints = function(){
  var i = points.length;
  while(i--){
    points[i].update();
  }
};

var renderPoints = function(){
  var i = points.length;
  while(i--){
    points[i].render();
  }
};

var renderShape = function(){
  ctx.beginPath();
  var pointCount = points.length;
  ctx.moveTo(points[0].x, points[0].y);	  
  var i;
  for (i = 0; i < pointCount - 1; i++) {
    var c = (points[i].x + points[i + 1].x) / 2;
    var d = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
  }
  ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
  ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
  ctx.closePath();   
  ctx.fillStyle = '#0000FF';
  ctx.fill();  
  ctx.stroke();
};

var clear = function(){
  ctx.clearRect(0, 0, cw, ch);
};

var loop = function(){
  window.requestAnimFrame(loop, c);
  tick++;
  clear();
  updatePoints();
  renderShape();
  //renderPoints();
};

var i = opt.count + 2;
var spacing = (cw + (opt.range.x * 2)) / (opt.count-1);
while(i--){
  points.push(new Point({
    x: (spacing * (i - 1)) - opt.range.x,
    y: ch - (ch * opt.level)
  }));
}

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

loop();
var c = document.getElementById("wave");
var ctx = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var clearColor = 'transparent';
var max = 50;
var drops = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function O() {}

O.prototype = {
	init: function() {
		this.x = random(0, w);
		this.y = 0;
		this.color = 'hsl(180, 100%, 50%)';
		this.w = 2;
		this.h = 1;
		this.vy = 15;
		this.vw = 3;
		this.vh = 1;
		this.size = 0;
		this.hit = random(h * .8, h * .9);
		this.a = 1;
		this.va = .96;
	},
	draw: function() {
		if (this.y > this.hit) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y - this.h / 2);

			ctx.bezierCurveTo(
				this.x + this.w / 2, this.y - this.h / 2,
				this.x + this.w / 2, this.y + this.h / 2,
				this.x, this.y + this.h / 2);

			ctx.bezierCurveTo(
				this.x - this.w / 2, this.y + this.h / 2,
				this.x - this.w / 2, this.y - this.h / 2,
				this.x, this.y - this.h / 2);

			ctx.strokeStyle = 'hsla(180, 100%, 50%, '+this.a+')';
			ctx.stroke();
			ctx.closePath();
			
		} else {
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.size, this.size * 5);
		}
		this.update();
	},
	update: function() {
		if(this.y < this.hit){
			this.y += this.vy;
		} else {
			if(this.a > .03){
				this.w += this.vw;
				this.h += this.vh;
				if(this.w > 100){
					this.a *= this.va;
					this.vw *= .98;
					this.vh *= .98;
				}
			} else {
				this.init();
			}
		}
		
	}
}

function resize(){
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
}

function setup(){
	for(var i = 0; i < max; i++){
		(function(j){
			setTimeout(function(){
				var o = new O();
				o.init();
				drops.push(o);
			}, j * 200)
		}(i));
	}
}


function anim() {
	ctx.fillStyle = clearColor;
	ctx.fillRect(0,0,w,h);
	for(var i in drops){
		drops[i].draw();
	}
	requestAnimationFrame(anim);
}


window.addEventListener("resize", resize);

setup();
anim();