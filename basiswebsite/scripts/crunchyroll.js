/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//zichtbare sterren//
var ster1 = document.querySelector('.favoriet');
var ster2 = document.querySelector('.favoriet1');
var ster3 = document.querySelector('.favoriet2');
var ster4 = document.querySelector('.favoriet3');

//onzichtbare sterren//
var jsSter1 = document.querySelector('.favoriet-');
var jsSter2 = document.querySelector('.favoriet1-1');
var jsSter3 = document.querySelector('.favoriet1-2');
var jsSter4 = document.querySelector('.favoriet1-3');




function ster1Klik() {
    ster1.style.visibility = 'hidden';
    jsSter1.style.visibility = 'visible';
}

function ster2Klik() {
    ster2.style.visibility = 'hidden';
    jsSter2.style.visibility = 'visible';
}

function ster3Klik() {
    ster3.style.visibility = 'hidden';
    jsSter3.style.visibility = 'visible';
}

function ster4Klik() {
    ster4.style.visibility = 'hidden';
    jsSter4.style.visibility = 'visible';
}

function jsSter1Klik() {
    jsSter1.style.visibility = 'hidden';
    ster1.style.visibility = 'visible';
}

function jsSter2Klik() {
    jsSter2.style.visibility = 'hidden';
    ster2.style.visibility = 'visible';
}

function jsSter3Klik() {
    jsSter3.style.visibility = 'hidden';
    ster3.style.visibility = 'visible';
}

function jsSter4Klik() {
    jsSter4.style.visibility = 'hidden';
    ster4.style.visibility = 'visible';
}


var input = document.querySelector(".textinput");
var button = document.querySelector(".button");


function stateHandle() {
  if (document.querySelector("input").value === 0) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}


ster1.addEventListener('click', ster1Klik, false);
ster2.addEventListener('click', ster2Klik, false);
ster3.addEventListener('click', ster3Klik, false);
ster4.addEventListener('click', ster4Klik, false);
jsSter1.addEventListener('click', jsSter1Klik,false);
jsSter2.addEventListener('click', jsSter2Klik,false);
jsSter3.addEventListener('click', jsSter3Klik,false);
jsSter4.addEventListener('click', jsSter4Klik,false);
input.addEventListener("change", stateHandle);
