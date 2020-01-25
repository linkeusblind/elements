const btn = document.querySelector('.talk');
let contentDe = document.querySelector('.answerDe');




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'de-De';

recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    contentDe.textContent = transcript;
    readOutLoud(transcript);
};

function myClick() {
    setTimeout(
      function() {
        const messagenew = document.getElementById("answerDe").value;
      }, 2000);
  }







btn.addEventListener('click', () => {
    recognition.start();
    
});



function readOutLoud(messagepl){

    let speech = new SpeechSynthesisUtterance();

    console.log(messagepl);
    
    setTimeout(function(){

    //let element = document.querySelectorAll('.answerDe')
    var element = document.querySelectorAll('.answerDe');
    const planswer = element[0].innerHTML;
    //
    console.log(element);

    element.forEach(item => {
    console.log(item.innerHTML = item.innerText || item.textContent);
    item.innerHTML = item.innerText || item.textContent
    
    })
    
    //const planswer = element['innerText'];
    
    //speech.text = document.getElementById("answerDe").value;
    speech.text = planswer;
    console.log(planswer);

    speech.lang = 'pl-PL';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    }, 2000);



    

   




    
    
}


   






