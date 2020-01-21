const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Odpowiedzi
const greetings = ['Spoko ziomek, tragedii nie ma', 'A co cię to obchodzi', 'Najlepszy dzień ever', 'Całkiem dobrze, a co u Ciebie', 'Zostaw mnie w spokoju'];

const weather = ['Jutro będzie piękny dzień', 'Pogoda będzie szałowa oooooiiii', 'Będzie lało jak nie wiem co, lepiej zostań w domu', 'To będzie dobry dzień na gorącą czekoladę i kocyk', 'Daj spokój, szkoda gadać']
//

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = message;

    if(message.includes('słychać')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('pogoda')){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}