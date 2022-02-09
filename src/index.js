import * as Tone from 'tone'

const synth = new Tone.Synth();
synth.oscillator.type = "triangle";
synth.toDestination(); 

document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById("myModal");
  
  let span = document.getElementsByClassName("close")[0];
  
  modal.style.display = "block"
  
  span.onclick = function() {
    modal.style.display = "none";
  }


  let piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});
  piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

  document.addEventListener("keydown", e => {
    if (e.repeat) return;

    if (e.key === "a") synth.triggerAttack("A3")
  
    if (e.key === "w") synth.triggerAttack("A#3")
  
    if (e.key === "s") synth.triggerAttack("B3")
    
    if (e.key === "d") synth.triggerAttack("C4")
    
    if (e.key === "r") synth.triggerAttack("C#4")
    
    if (e.key === "f") synth.triggerAttack("D4")
    
    if (e.key === "t") synth.triggerAttack("D#4")
    
    if (e.key === "g") synth.triggerAttack("E4")
    
    if (e.key === "h") synth.triggerAttack("F4")
    
    if (e.key === "u") synth.triggerAttack("F#4")
    
    if (e.key === "j") synth.triggerAttack("G4")
    
    if (e.key === "i") synth.triggerAttack("G#4")
    
    if (e.key === "k") synth.triggerAttack("A4")
    
    if (e.key === "o") synth.triggerAttack("A#4")
    
    if (e.key === "l") synth.triggerAttack("B4")
    
    if (e.key === ";") synth.triggerAttack("C5")

    // e.key.classList.add("pressed"); doesn't work yet.
  });

  document.addEventListener("keyup", e => {
    let keys = ["a", "w", "s", "d", "r", "f", "t", "g", "h", "u", "j", "i", "k", "o", "l", ";"]
    if (keys.includes(e.key)) synth.triggerRelease();
  });

}); 


//create function here and pass keys in?
// document.addEventListener("DOMContentLoaded", () => {
//   const keys = document.querySelectorAll(".key")
//   keys.forEach(key => {
//     key.addEventListener("mousedown", () => playNote(key))
//   });  

// function playNote(key) {
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