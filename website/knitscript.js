//global variables set to hide
var yWidth = 0;
var nWidth = 0;
var yColor = 0;
var start = false; //p5 draw

function init() {
	//create arrays for knitting options
	var needles = document.getElementsByClassName('needle');
	var yarns = document.getElementsByClassName('yarn');
	var colors = document.getElementsByClassName('color');

//NEEDLES

	//add event listeners to needles for interaction
	for(var i = 0; i < needles.length; i++) {
		needles[i].addEventListener('click', needleSelect);
	}

	//set nWidth
	function needleSelect(e){
		var tag = e.target;
		//if click on li
		if (tag.tagName == 'LI') {
			nWidth = tag.querySelector('svg').width.animVal.value;
		//if click on text
		} else if (tag.tagName == 'P') {
			nWidth = tag.parentNode.querySelector('svg').width.animVal.value;
		//if click on svg		
		} else if (tag.tagName == 'svg') {
			nWidth = tag.width.animVal.value;
		} else {
			nWidth = tag.ownerSVGElement.width.animVal.value;
		}

		console.log(nWidth);

	};

//YARN WEIGHTS

	//add event listeners to yarns
	for(var i = 0; i < yarns.length; i++) {
		yarns[i].addEventListener('click', yarnSelect);
	}

	//set yWidth
	function yarnSelect(e){
		var tag = e.target;
		//if click on li
		if (tag.tagName == 'LI') {
			yWidth = tag.querySelector('svg').width.animVal.value;
		//if click on text
		} else if (tag.tagName == 'P') {
			yWidth = tag.parentNode.querySelector('svg').width.animVal.value;		
		//if click on svg
		} else if (tag.tagName == 'svg') {
			yWidth = tag.width.animVal.value;
		} else {
			yWidth = tag.ownerSVGElement.width.animVal.value;
		}
		
		console.log(yWidth);

	};

//YARN COLORS

	//add event listeners to colors
	for(var i = 0; i < colors.length; i++) {
		colors[i].addEventListener('click', colorSelect);
	}

	//set yColor
	function colorSelect(e){
		var tag = e.target;
		var yColorhex = tag.attributes.fill.value;		
		yColor = hexToRgb(yColorhex);
		console.log(yColor);
	};

//BUTTON

	//clicking button triggers canvas
	var button = document.getElementById('button').addEventListener('click', function(e){
		e.preventDefault();
		showhide('p5can');
		showhide('content');
		start = true;
	} );
	
	//show/hide divs by changing computed display value
	function showhide(id) {
		var div = document.getElementById(id);
		var sty = getComputedStyle(div);
		console.log(sty.display);
		if (sty.display == 'none'){
			console.log("woo");
			div.style.display = 'block';
		} else {
			div.style.display = 'none';
		}	
	}

}; //end init function

//Convert hex to rgb

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    	} : null;
};


//P5

var s; //stitch
var can; //canvas

function setup(){
	//createCanvas(1000, 600);
	can = createCanvas(windowWidth, windowHeight);
	can.parent('p5can');
	s = new Needle();
	console.log(nWidth, yWidth, yColor);
};

function draw() {
	if (start == true && s.yLoc < (height - nWidth)) {
		s.k();
		s.move();		
	}
};

//needle class
function Needle(){
	this.xLoc = 50;
	this.yLoc = 50;

  this.k = function() {
    noFill();
    stroke(yColor.r, yColor.g, yColor.b, 100);
    strokeWeight(yWidth); 
    ellipse(this.xLoc, this.yLoc, nWidth, nWidth);
    console.log(this.xLoc + " " + this.yLoc);
  }

  this.move = function() {
  	this.xLoc += (nWidth/2+yWidth);
  	if (this.xLoc >= (width - nWidth)) {
  		this.xLoc = 50;
  		this.yLoc += (nWidth/2+yWidth);
  	}  	
  }
} //end needle class

window.addEventListener('load', init);



