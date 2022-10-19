import * as Tone from 'tone'

// Instantiate new synth object, set oscillator type, send output to computer speakers 
let vol = new Tone.Volume(0).toDestination()
const synth = new Tone.Synth().connect(vol);
synth.oscillator.type = "triangle";

const updateVolume = () => {
  let level = parseInt(volume.value)
  vol.volume.value = (level - 50)
}

document.addEventListener("DOMContentLoaded", () => {

  // call updateVolume function when the colume slider is moved by user
  let volumeSlider = document.getElementById("volume")
  volumeSlider.onchange = updateVolume
  
  // modal fucntionality
  let modal = document.getElementById("myModal");
  
  let close = document.getElementsByClassName("close")[0];
  let open = document.getElementsByClassName("open")[0];
  
  modal.style.display = "block"
  
  close.onclick = function() {
    modal.style.display = "none";
  }
  open.onclick = function() {
    modal.style.display = "block";
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
  // piano keys turn gray when played with computer keyboard

  document.addEventListener("keydown", e => {

    if (e.repeat) return;

    if (e.key.toLowerCase() === "a") {
      synth.triggerAttack("A3")
      let node = document.getElementById("A")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "w") {
      synth.triggerAttack("A#3")
      let node = document.getElementById("W")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "s") {
      synth.triggerAttack("B3")
      let node = document.getElementById("S")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "d") {
      synth.triggerAttack("C4")
      let node = document.getElementById("D")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "r") {
      synth.triggerAttack("C#4")
      let node = document.getElementById("R")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "f") {
      synth.triggerAttack("D4")
      let node = document.getElementById("F")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "t") {
      synth.triggerAttack("D#4")
      let node = document.getElementById("T")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "g") {
      synth.triggerAttack("E4")
      let node = document.getElementById("G")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "h") {
      synth.triggerAttack("F4")
      let node = document.getElementById("H")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "u") {
      synth.triggerAttack("F#4")
      let node = document.getElementById("U")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "j") {
      synth.triggerAttack("G4")
      let node = document.getElementById("J")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "i") {
      synth.triggerAttack("G#4")
      let node = document.getElementById("I")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "k") {
      synth.triggerAttack("A4")
      let node = document.getElementById("K")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "o") {
      synth.triggerAttack("A#4")
      let node = document.getElementById("O")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === "l") {
      synth.triggerAttack("B4")
      let node = document.getElementById("L")
      node.classList.add("active")
    }

    if (e.key.toLowerCase() === ";") {
      synth.triggerAttack("C5")
      let node = document.getElementById(";")
      node.classList.add("active")
    }
  });

  document.addEventListener("keyup", e => {
    let keys = ["a", "w", "s", "d", "r", "f", "t", "g", "h", "u", "j", "i", "k", "o", "l", ";"]
    if (keys.includes(e.key.toLowerCase())) {
      synth.triggerRelease();
      let node = document.getElementById(`${e.key.toUpperCase()}`)
      node.classList.remove("active")
    }
  });
}); 

