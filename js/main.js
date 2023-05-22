 // ONLOAD FUNCTION START
window.onload = pageReady;

function pageReady(){

   // CREATE VARIABLE PART START

  let playButton = document.getElementById("playBtn");
  let pauseButton = document.getElementById("pauseBtn");
  let playAgainButton = document.getElementById("playAgainBtn");
  let cloud1= document.getElementById("cloud1");
  let cloud2= document.getElementById("cloud2");
  let duck1= document.getElementsByClassName("duck1")[0];
  let duck2= document.getElementsByClassName("duck2")[0];
  let duck3= document.getElementsByClassName("duck3")[0];
  let duck4= document.getElementsByClassName("duck4")[0];
  let duck5= document.getElementsByClassName("duck5")[0];
  let sound = document.getElementById('sound1');
  
   let d1 = document.getElementsByClassName('duck1')[0];
   let d2 = document.getElementsByClassName('duck2')[0];
   let d3 = document.getElementsByClassName('duck3')[0];
   let d4 = document.getElementsByClassName('duck4')[0];
   let d5 = document.getElementsByClassName('duck5')[0];

  
  // CREATE VARIABLE PART START
  // PLAY BUTTON PART START

  playButton.onclick = start;
  
  function start() {
    
    cloud1.style.animationPlayState = "running";
    cloud2.style.animationPlayState = "running";
    duck1.style.animationPlayState = "running";
    duck2.style.animationPlayState = "running";
    duck3.style.animationPlayState = "running";
    duck4.style.animationPlayState = "running";
    duck5.style.animationPlayState = "running";
    playButton.style.display = "none"; 
   
  };
  // PLAY BUTTON PART END
  // PLAY SOUND FOR FIRST DUCK
  d1.onclick = mysound;
     function mysound(){ 
      sound.play();       
     };
  // PLAY SOUND FOR SECOND DUCK
  d2.onclick = mysound;
     function mysound(){ 
      sound.play();       
     };
   // PLAY SOUND FOR THIRD DUCK
  d3.onclick = mysound;
     function mysound(){ 
      sound.play();       
     };
   // PLAY SOUND FOR FORTH DUCK
  d4.onclick = mysound;
     function mysound(){ 
      sound.play();       
     };
   // PLAY SOUND FOR FIFTH DUCK
  d5.onclick = mysound;
     function mysound(){ 
      sound.play();       
     };
// PAUSE BUTTON PART START
  pauseButton.onclick = pause;
  function pause(){
    cloud1.style.animationPlayState = "paused";
    cloud2.style.animationPlayState = "paused";
    duck1.style.animationPlayState = "paused";
    duck2.style.animationPlayState = "paused";
    duck3.style.animationPlayState = "paused";
    duck4.style.animationPlayState = "paused";
    duck5.style.animationPlayState = "paused";
    playButton.style.display = "block";
    
  };
// PAUSE BUTTON PART END
// PLAY AGAIN BUTTON  PART START
  playAgainButton.onclick = playAgain;
  function playAgain(){

    location.reload();
  };
  // PLAY AGAIN BUTTON  PART END

};  // ONLOAD FUNCTION END


