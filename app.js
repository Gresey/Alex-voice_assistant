const btn=document.querySelector('.talk')
const content=document.querySelector('.content')

function speak(text){                         // vspeak the text
   const text_speak= new SpeechSynthesisUtterance(text);
   text_speak.rate=1;
   text_speak.volume=1;
   text_speak.pitch=1;

   window.speechSynthesis.speak(text_speak);
}

function wishMe(){                           // wish the user according to the time
   const day=new Date();
   var hour=day.getHours();
   if(hour>=0 && hour<12) {
      speak("Good Morning ");
   } else if(hour<12 && hour>=6) {
      speak("Good Afternoon");
   }else{
      speak("Good Evening");
   
   }
}
window.addEventListener('load',()=>{         //on load of the page
   speak("Initializing alex");
   wishMe();
});

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;  //to get speech command from microphone
const recognition=new SpeechRecognition();

recognition.onresult=(event)=>{
   const currentIndex=event.resultIndex;
   const transcript=event.results[currentIndex][0].transcript;
   content.textContent=transcript;
   takeCommand(transcript.toLowerCase());             
}

btn.addEventListener('click',()=>{
   content.textContent="Listening..."
   recognition.start();
});                                                            //on click of the button


function takeCommand(message){
if(message.includes('hey')|| message.includes('hello')){
   speak("Hello Ma'am ,how may i help you");

}else if(message.includes('open google')){
   window.open('https://www.google.com/',"_blank");
   speak("Opening Google");
}else if(message.includes('open youtube')){
   window.open('https://www.youtube.com/',"_blank");
   speak("Opening youtube");
}else if(message.includes('open facebook')){
   window.open('https://www.facebook.com/',"_blank");
   speak("Opening facebook");
}else if(message.includes('what is')||message.includes('ways')|| message.includes('who is')||message.includes('tell me about')|| message.includes("How")||message.includes("where")||message.includes("when")||message.includes("why")||message.includes("which")||message.includes("whose")||message.includes("whom")){

   const search=message.split(' ').slice(2).join(' ');
   window.open(`https://www.google.com/search?q=${search}`,"_blank");
   speak("Searching for "+search);
}else if(message.includes("date")){
   const date=new Date();
   speak(date.toDateString());
}else if(message.includes("time")){
   const time=new Date();
   speak(time.toLocaleTimeString());
}
else if(message.includes("play music")){
   window.open('https://www.spotify.com/in/',"_blank");
   speak("Playing music");
}else if(message.includes("calculator")){
   window.open('Calculator:///',"_blank");
   speak("Opening Calculator");
}else if(message.includes("temperature")|| message.includes("weather")){
   window.open("https://www.windy.com/-Temperature-temp?temp,21.997,79.001,5","_blank");
   speak("showing weather");

}else if(message.includes("open laptop settings")){
   window.open("ms-settings:","_blank");
   speak("opening settings");
}

else{
   speak("Sorry, I didn't get that. Please try again.")
}

}