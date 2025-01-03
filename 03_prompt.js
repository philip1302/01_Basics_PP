//Installation:
//npm install -g npm@latest
//npm cache clean --force
//npm install  prompt- sync

const prompt = require('prompt-sync')({sigint: true});

let eingabe = prompt("Zahl1?:");
let zahl1=+eingabe;
eingabe = prompt("Zahl2?:");
let zahl2=+eingabe;
console.log(zahl1+zahl2);