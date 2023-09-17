const synth = window.speechSynthesis;
const input = document.querySelector('#textarea');
const selectVoices = document.querySelector('#voices');
let voices = [];

function getVoices() { 

  voices = synth.getVoices();
  voices.forEach((voice, index) => {

    selectVoices.add(new Option(`${voice.name} (${voice.lang})`, index));
  });
}

window.addEventListener('load', () => {
  getVoices();

  if (synth.onvoiceschanged !== undefined)
    synth.onvoiceschanged = getVoices;
});


document.querySelector('#button').addEventListener('click', () => {

  var utter = new SpeechSynthesisUtterance(input.value);
  utter.voice = voices[selectVoices.value];

    synth.speak(utter);
  
});