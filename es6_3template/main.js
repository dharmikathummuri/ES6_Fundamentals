"use strict"

let name="sumukh"
let template = `<h1> ${makeUpperCase('hola')} hello world</h1> 
${name}
<p>this is dharmika</p>`

document.getElementById("template").innerHTML =template;

function makeUpperCase(word){

	return word.toUpperCase();


}