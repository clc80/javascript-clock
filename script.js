var time = new Date().getHours();  //morning, noon, or evening

//Times we will have a message for
var wakeUp = 6;
var lunchTime = 12;
var noon = 12;
var afternoon = 13;
var napTime = 14;
var evening = 18;
var partyTime = 21;

var isPartyTime = false;

//changes to HTML with Javascript
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

//FUNCTIONS
var updateClock = function(){
  //for changing the text in the message area
  var messageText; 
  //This will get the timeEvent id
  var timeEventJS = document.getElementById("timeEvent");
  //This is for changing the image
  var lolcatJS = document.getElementById("lolcat");
  //set the original cat picture
  var catImage = "https://s-media-cache-ak0.pinimg.com/originals/9a/db/1a/9adb1a12c1bcf3da685a9812b4f6df10.jpg";
 
  //Special Messages only show up at certain times
  if(time == wakeUp){
    messageText = "Wake Up";
    catImage = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSmh-L5pOORccjFCgf1ljYxogbnPK7PjUIooCtwBjdXh2XnQXSs";
  }
  else if (time == lunchTime){
    messageText = "It's time for lunch, what are we having?";
    catImage = "https://s-media-cache-ak0.pinimg.com/564x/74/af/a5/74afa5ef77a2e9a851df4a260586040b.jpg";
  }
  else if (time == napTime){
    messageText = "I'm sleepy, let's take a nap";
    catImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  }
  else if (time == partyTime){
    messageText = "WooHoo!! It's time to Party!";
    catImage = "http://www.funchannel.net/wp-content/uploads/2013/07/Party-Cat.jpg";
  }
  //All other messages
  else if(time < afternoon && time != lunchTime){
    messageText = "Good Morning";
  }
  else if (time < evening && time != napTime){
    messageText = "Good Afternoon";
  } 
  else if (time > evening && time != partyTime){
    messageText = "Good Evening";
  }
  else {
    messageText = "Hello";
  }

  //Change message
  timeEventJS.innerText = messageText;

   //Change image
  lolcatJS.src = catImage;
  
  //Call Function to show time on clock
  showCurrentTime();
};

var showCurrentTime = function(){

  //display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  //set hours
  if (hours >= noon){
    meridian = "PM";
  }
  if (hours > noon){
    hours = hours - 12;
  }
  
  //set minutes
  if (minutes < 10){
    minutes = "0" + minutes;
  }

  //set seconds
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  //put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

var partyEvent = function(){
  if(isPartyTime === true){
    isPartytime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
 else{
   isPartyTime = true;
   time = partyTime;
   partyTimeButton.innerText = "PARTY TIME!";
   partyTimeButton.style.backgroundColor = "#222";
 }
};

var wakeUpEvent = function(){
  wakeUp = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function(){
  lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function(){
  napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);                            
napTimeSelector.addEventListener('change', napTimeEvent);
        