import * as Tone from 'tone'

const synth = new Tone.Synth();
synth.oscillator.type = "triangle";
synth.toDestination();  //toMaster deprecated

document.addEventListener("DOMContentLoaded", () => {
  let piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});
  piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});
}); 
//create function here and pass keys in?
// document.addEventListener("DOMContentLoaded", () => {
//   const keys = document.querySelectorAll(".key")
//   keys.forEach(key => {
//     key.addEventListener("click", () => playNote(key))
//   });  

// function playNote(key) {
//   console.log(key);
//   const note = document.getElementById(key.dataset.note)
//   synth.triggerAttackRelease(`${note}`, "8n");
//   // Tone.start();
// }
// }); //create function here and pass keys in?
// window.synth = synth;


// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('.key')?.addEventListener('click', playSound
// )}

// document.addEventListener("DOMContentLoaded", () => {
//   let g = "Piano Man"
//   console.log(g);
// });


// import "./styles/index.scss"

// const { Tone } = require("tone/build/esm/core/Tone");
// new AudioContext();
// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");


document.addEventListener("DOMContentLoaded", () => {
    let g = "Piano Man"
    console.log(g);
  }); 


// const piano = document.getElementById("piano");

// piano.addEventListener("clickdown", e => {
//   synth.triggerAttack(e.target.dataset.note);
// });

// piano.addEventListener("clickup", e => {
//   synth.triggerRelease;
// });