// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.
var goodbyeSpeakGlobal={};
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function () {

  goodbyeSpeakGlobal.speakWord = "Good Bye";
  goodbyeSpeakGlobal.byeSpeaker = function speak(name) {
      console.log(goodbyeSpeakGlobal.speakWord + " " + name);
  }




})();
