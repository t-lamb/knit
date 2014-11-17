var yWidth = 5;
var nWidth = 16;

function init() {
	var needles = document.getElementsByClassName('needle');

	var yarns = document.getElementsByClassName('yarn');

	var button = document.getElementById('button').addEventListener('click', knitCanvas);

	//add event listeners to needles for interaction
	for(var i = 0; i < needles.length; i++) {
		needles[i].addEventListener('click', needleSelect);
	}

	function needleSelect(e){
		var tag = e.target;
		if (tag.tagName == 'LI') {
			nWidth = tag.querySelector('svg').width.animVal.value;
		} else if (tag.tagName == 'P') {
			nWidth = tag.parentNode.querySelector('svg').width.animVal.value;		
		} else if (tag.tagName == 'svg') {
			nWidth = tag.width.animVal.value;
		} else {
			nWidth = tag.ownerSVGElement.width.animVal.value;
		}

		console.log(nWidth);

	};

	//add event listeners to yarns
	for(var i = 0; i < yarns.length; i++) {
		yarns[i].addEventListener('click', yarnSelect);
	}

	function yarnSelect(e){
		var tag = e.target;
		if (tag.tagName == 'LI') {
			yWidth = tag.querySelector('svg').width.animVal.value;
		} else if (tag.tagName == 'P') {
			yWidth = tag.parentNode.querySelector('svg').width.animVal.value;		
		} else if (tag.tagName == 'svg') {
			yWidth = tag.width.animVal.value;
		} else {
			yWidth = tag.ownerSVGElement.width.animVal.value;
		}
		
		console.log(yWidth);

	};

	// //p5
	function knitCanvas(e){
		e.preventDefault();
	 	setup();
	 	draw();
	}

	// 	function setup(){
	// 		console.log("setup");
	// 		createCanvas(600, 400);
	// 	}

	// 	function draw() {
	// 		ellipse (50, 50, 80, 80);
			
	// 	}
	// };

};

var s;

function setup(){
	createCanvas(800, 600);
	s = new Needle();
	console.log(nWidth, yWidth);
}

function draw() {
	s.k();
	s.move();		
}

//needle class
function Needle(){
	this.xLoc = 20;
	this.yLoc = 20;

  this.k = function() {
    noFill();
    stroke(0, 0 ,255);
    strokeWeight(yWidth); 
    ellipse(this.xLoc, this.yLoc, nWidth, nWidth);
  }

  this.move = function() {
  	this.xLoc += 10;

  }
}

window.addEventListener('load', init);