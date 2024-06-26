const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const nameofuser=document.getElementById('username');
const password=document.getElementById('password');
const submitButton = document.getElementById('submitbutton');

function speak(text) {                         // speak the text
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {                           // wish the user according to the time
    const day = new Date();
    var hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning ");
    } else if (hour < 12 && hour >= 6) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");

    }
}
window.addEventListener('load', () => {         //on load of the page
    speak("I am alex");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;  //to get speech command from microphone
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening..."
    recognition.start();
});                                                            //on click of the button

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Ma'am, how may I help you");
    } else if (message.includes('open google')) {
        window.open('https://www.google.com/', "_blank");
        speak("Opening Google");
    } else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com/', "_blank");
        speak("Opening YouTube");
    } else if (message.includes('open facebook')) {
        window.open('https://www.facebook.com/', "_blank");
        speak("Opening Facebook");
    } else if (message.includes('what is') || message.includes('ways') || message.includes('who is') || message.includes('tell me about') || message.includes("How") || message.includes("where") || message.includes("when") || message.includes("why") || message.includes("which") || message.includes("whose") || message.includes("whom")) {
        const search = message.split(' ').slice(2).join(' ');
        window.open(`https://www.google.com/search?q=${search}`, "_blank");
        speak("Searching for " + search);
    } else if (message.includes("date")) {
        const date = new Date();
        speak(date.toDateString());
    } else if (message.includes("time")) {
        const time = new Date();
        speak(time.toLocaleTimeString());
    } else if (message.includes("play music")) {
        window.open('https://www.spotify.com/in/', "_blank");
        speak("Playing music");
    } else if (message.includes("calculator")) {
        
         
            window.open('Calculator:///', "_blank");
            speak("Opening Calculator");
        
    } else if (message.includes("temperature") || message.includes("weather")) {
        window.open("https://www.windy.com/-Temperature-temp?temp,21.997,79.001,5", "_blank");
        speak("Showing weather");
    } else if (message.includes("open laptop settings")) {
        window.open("ms-settings:", "_blank");
        speak("Opening settings");
    }else if(message.includes('login')){
        window.location.href = "login.html";
        recognition.start();
    } else if(message.includes('enter my name')){
        nameofuser.value="Gresey";
        nameofuser.textContent="Gresey";
    }else if(message.includes('enter password')){
      password.value="1234";
    }else if(message.includes('submit')){
        submitButton.click(); 
            onsubmit();
        
    } 
     else {
        speak("Sorry, I didn't get that. Please try again.")
    }
}

submitButton.addEventListener('click', () => {
    console.log("Username:", nameofuser.value);
    console.log("Password:", password.value);
    
});
