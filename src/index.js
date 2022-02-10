// Import Tone.js library
import * as Tone from 'tone'

// Instantiate new synth object, set oscillator type, send output to computer speakers 
const synth = new Tone.Synth();
synth.oscillator.type = "triangle";
synth.toDestination(); 

document.addEventListener("DOMContentLoaded", () => {
  // modal fucntionality
  let modal = document.getElementById("myModal");
  
  let span = document.getElementsByClassName("close")[0];
  
  modal.style.display = "block"
  
  span.onclick = function() {
    modal.style.display = "none";
  }

  // play piano with mouse
  let piano = document.getElementById("piano");

  piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});
  piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

  // play piano with computer keyboard
  document.addEventListener("keydown", e => {

    if (e.repeat) return;

    if (e.key.toLowerCase() === "a") synth.triggerAttack("A3")
  
    if (e.key.toLowerCase() === "w") synth.triggerAttack("A#3")
  
    if (e.key.toLowerCase() === "s") synth.triggerAttack("B3")
    
    if (e.key.toLowerCase() === "d") synth.triggerAttack("C4")
    
    if (e.key.toLowerCase() === "r") synth.triggerAttack("C#4")
    
    if (e.key.toLowerCase() === "f") synth.triggerAttack("D4")
    
    if (e.key.toLowerCase() === "t") synth.triggerAttack("D#4")
    
    if (e.key.toLowerCase() === "g") synth.triggerAttack("E4")
    
    if (e.key.toLowerCase() === "h") synth.triggerAttack("F4")
    
    if (e.key.toLowerCase() === "u") synth.triggerAttack("F#4")
    
    if (e.key.toLowerCase() === "j") synth.triggerAttack("G4")
    
    if (e.key.toLowerCase() === "i") synth.triggerAttack("G#4")
    
    if (e.key.toLowerCase() === "k") synth.triggerAttack("A4")
    
    if (e.key.toLowerCase() === "o") synth.triggerAttack("A#4")
    
    if (e.key.toLowerCase() === "l") synth.triggerAttack("B4")
    
    if (e.key.toLowerCase() === ";") synth.triggerAttack("C5")

    // key.classList.add("active"); //need to implement 
    // e.key.style.display = "active"; //need to implement 
    // piano keys turn gray when played with computer keyboard
  });

  document.addEventListener("keyup", e => {
    let keys = ["a", "w", "s", "d", "r", "f", "t", "g", "h", "u", "j", "i", "k", "o", "l", ";"]
    if (keys.includes(e.key.toLowerCase())) synth.triggerRelease();
  });

}); 

