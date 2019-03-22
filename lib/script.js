

//  █████╗ ███████╗     ██╗ █████╗  █████╗  ██╗
// ██╔══██╗██╔════╝    ███║██╔══██╗██╔══██╗███║
// ███████║█████╗█████╗╚██║╚██████║╚██████║╚██║
// ██╔══██║██╔══╝╚════╝ ██║ ╚═══██║ ╚═══██║ ██║
// ██║  ██║██║          ██║ █████╔╝ █████╔╝ ██║
// ╚═╝  ╚═╝╚═╝          ╚═╝ ╚════╝  ╚════╝  ╚═╝

// AF-1991 is a simple polysynth put together 
// by Aarick Farist using the Tone.js library
// for sounds and Nexus UI for visualization.

// In its current state it only acts as a simple
// polysynth with no adjustable parameters.
// This project was built quickly for the purposes
// of learning music theory and chord composition

// Hopefully in the future it will have more features.
// Cheers!

const synth = new Tone.PolySynth().toMaster();
synth.set({
    "oscillator": {
        type: "triangle"
    }
});
Nexus.context = Tone.context;

const keyTracker = {
    a: false,
    w: false,
    s: false,
    e: false,
    d: false,
    f: false,
    t: false,
    g: false,
    y: false,
    h: false,
    u: false,
    j: false,
    k: false,
    o: false,
    l: false,
    p: false,
    ";": false
}

let octave = 3;

// octave display:
const o1 = document.getElementById("1");
const o2 = document.getElementById("2");
const o3 = document.getElementById("3");
const o4 = document.getElementById("4");
const o5 = document.getElementById("5");
const o6 = document.getElementById("6");
const o7 = document.getElementById("7");
const o8 = document.getElementById("8");

// waveform selector
const sine = document.getElementById("sine");
const sawtooth = document.getElementById("sawtooth");
const square = document.getElementById("square");
const triangle = document.getElementById("triangle");

document.addEventListener("DOMContentLoaded", () => {
    o3.classList.add("selected");
    triangle.classList.add("selected");
});

// plays the notes/handles octave changes
document.addEventListener("keydown", e => {
    let key = e.key;
    console.log(key);
    switch(key) {
        case "-":
            if(octave > 1) {
                octave--;
                o1.classList.remove("selected");
                o2.classList.remove("selected");
                o3.classList.remove("selected");
                o4.classList.remove("selected");
                o5.classList.remove("selected");
                o6.classList.remove("selected");
                o7.classList.remove("selected");
                o8.classList.remove("selected");
                switch(octave) {
                    case 1:
                        o1.classList.add("selected");
                        break;
                    case 2:
                        o2.classList.add("selected");
                        break;
                    case 3:
                        o3.classList.add("selected");
                        break;
                    case 4:
                        o4.classList.add("selected");
                        break;
                    case 5:
                        o5.classList.add("selected");
                        break;
                    case 6:
                        o6.classList.add("selected");
                        break;
                    case 7:
                        o7.classList.add("selected");
                        break;
                    case 8:
                        o8.classList.add("selected");
                        break;
                }
            }
            break;
        case "=":
            if(octave < 8) {
                octave++;
                o1.classList.remove("selected");
                o2.classList.remove("selected");
                o3.classList.remove("selected");
                o4.classList.remove("selected");
                o5.classList.remove("selected");
                o6.classList.remove("selected");
                o7.classList.remove("selected");
                o8.classList.remove("selected");
                switch(octave) {
                    case 1:
                        o1.classList.add("selected");
                        break;
                    case 2:
                        o2.classList.add("selected");
                        break;
                    case 3:
                        o3.classList.add("selected");
                        break;
                    case 4:
                        o4.classList.add("selected");
                        break;
                    case 5:
                        o5.classList.add("selected");
                        break;
                    case 6:
                        o6.classList.add("selected");
                        break;
                    case 7:
                        o7.classList.add("selected");
                        break;
                    case 8:
                        o8.classList.add("selected");
                        break;
                }
            }
            break;
        case "a":
            if(!keyTracker.a) {
                synth.triggerAttack(`C${octave}`);
                keyTracker.a = true;
            }
            break;
        case "w":
            if(!keyTracker.w) {
                synth.triggerAttack(`C#${octave}`);
                keyTracker.w = true;
            }
            break;
        case "s":
            if(!keyTracker.s) {
                synth.triggerAttack(`D${octave}`);
                keyTracker.s = true;
            }
            break;
        case "e":
            if(!keyTracker.e) {
                synth.triggerAttack(`D#${octave}`);
                keyTracker.e = true;
            }
            break;
        case "d":
            if(!keyTracker.d) {
                synth.triggerAttack(`E${octave}`);
                keyTracker.d = true;
            }
            break;
        case "f":
            if(!keyTracker.f) {
                synth.triggerAttack(`F${octave}`);
                keyTracker.f = true;
            }
            break;
        case "t":
            if(!keyTracker.t) {
                synth.triggerAttack(`F#${octave}`);
                keyTracker.t = true;
            }
            break;
        case "g":
            if(!keyTracker.g) {
                synth.triggerAttack(`G${octave}`);
                keyTracker.g = true;
            }
            break;
        case "y":
            if(!keyTracker.y) {
                synth.triggerAttack(`G#${octave}`);
                keyTracker.y = true;
            }
            break;
        case "h":
            if(!keyTracker.h) {
                synth.triggerAttack(`A${octave}`);
                keyTracker.h = true;
            }
            break;
        case "u":
            if(!keyTracker.u) {
                synth.triggerAttack(`A#${octave}`);
                keyTracker.u = true;
            }
            break;
        case "j":
            if(!keyTracker.j) {
                synth.triggerAttack(`B${octave}`);
                keyTracker.j = true;
            }
            break;
        case "k":
            if(!keyTracker.k) {
                synth.triggerAttack(`C${octave + 1}`);
                keyTracker.k = true;
            }
            break;
        case "o":
            if(!keyTracker.o) {
                synth.triggerAttack(`C#${octave + 1}`);
                keyTracker.o = true;
            }
            break;
        case "l":
            if(!keyTracker.l) {
                synth.triggerAttack(`D${octave + 1}`);
                keyTracker.l = true;
            }
            break;
        case "p":
            if(!keyTracker.p) {
                synth.triggerAttack(`D#${octave + 1}`);
                keyTracker.p = true;
            }
            break;
        case ";":
            if(!keyTracker[";"]) {
                synth.triggerAttack(`E${octave + 1}`);
                keyTracker[";"] = true;
            }
            break;
    }
});

document.addEventListener("keyup", e => {
    let key = e.key;
    switch(key) {
        case "a":
            synth.triggerRelease(`C${octave}`);
            keyTracker.a = false;
            break;
        case "w":
            synth.triggerRelease(`C#${octave}`);
            keyTracker.w = false;
            break;
        case "s":
            synth.triggerRelease(`D${octave}`);
            keyTracker.s = false;
            break;
        case "e":
            synth.triggerRelease(`D#${octave}`);
            keyTracker.e = false;
            break;
        case "d":
            synth.triggerRelease(`E${octave}`);
            keyTracker.d = false;
            break;
        case "f":
            synth.triggerRelease(`F${octave}`);
            keyTracker.f = false;
            break;
        case "t":
            synth.triggerRelease(`F#${octave}`);
            keyTracker.t = false;
            break;
        case "g":
            synth.triggerRelease(`G${octave}`);
            keyTracker.g = false;
            break;
        case "y":
            synth.triggerRelease(`G#${octave}`);
            keyTracker.y = false;
            break;
        case "h":
            synth.triggerRelease(`A${octave}`);
            keyTracker.h = false;
            break;
        case "u":
            synth.triggerRelease(`A#${octave}`);
            keyTracker.u = false;
            break;
        case "j":
            synth.triggerRelease(`B${octave}`);
            keyTracker.j = false;
            break;
        case "k":
            synth.triggerRelease(`C${octave + 1}`);
            keyTracker.k = false;
            break;
        case "o":
            synth.triggerRelease(`C#${octave + 1}`);
            keyTracker.o = false;
            break;
        case "l":
            synth.triggerRelease(`D${octave + 1}`);
            keyTracker.l = false;
            break;
        case "p":
            synth.triggerRelease(`D#${octave + 1}`);
            keyTracker.p = false;
            break;
        case ";":
            synth.triggerRelease(`E${octave + 1}`);
            keyTracker[";"] = false;
            break;
    }
});

// changing waveforms
triangle.addEventListener("click", () => {
    triangle.classList.add("selected");
    sine.classList.remove("selected");
    square.classList.remove("selected");
    sawtooth.classList.remove("selected");
    synth.set({
        "oscillator": {
            type: "triangle"
        }
    });
});

sine.addEventListener("click", () => {
    sine.classList.add("selected");
    triangle.classList.remove("selected");
    square.classList.remove("selected");
    sawtooth.classList.remove("selected");
    synth.set({
        "oscillator": {
            type: "sine"
        }
    });
});

sawtooth.addEventListener("click", () => {
    sawtooth.classList.add("selected");
    triangle.classList.remove("selected");
    square.classList.remove("selected");
    sine.classList.remove("selected");
    synth.set({
        "oscillator": {
            type: "sawtooth"
        }
    });
});

square.addEventListener("click", () => {
    square.classList.add("selected");
    triangle.classList.remove("selected");
    sawtooth.classList.remove("selected");
    sine.classList.remove("selected");
    synth.set({
        "oscillator": {
            type: "square"
        }
    });
});

// visualization
const oscilloscope = new Nexus.Oscilloscope('#scope');
oscilloscope.connect(Tone.Master);