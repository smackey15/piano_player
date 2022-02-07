import * as Tone from 'tone'

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toDestination();  //toMaster deprecated

const keys = document.querySelectorAll(".key")

keys.forEach(key => {
    key.addEventListener("click", e => {
        synth.triggerAttack(e.target.dataset.note);
    })
}

























// import "./styles/index.scss"

// const { Tone } = require("tone/build/esm/core/Tone");
// new AudioContext();
// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");


// document.addEventListener("DOMContentLoaded", () => {
//     let g = "Piano Man"
//     console.log(g);
//   });

// const synth = new Tone.Synth();
// synth.oscillator.type = "sine";
// synth.toDestination();  //toMaster deprecated

// const piano = document.getElementById("piano");

// piano.addEventListener("clickdown", e => {
//   synth.triggerAttack(e.target.dataset.note);
// synth.triggerAttack("C4", "8n");
// });

// piano.addEventListener("clickup", e => {
//   synth.triggerRelease;
// });