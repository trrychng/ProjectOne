  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDApvX8cFw6TKuFVg5np-ucvsaS435WC3c",
    authDomain: "projectonepubcrawl.firebaseapp.com",
    databaseURL: "https://projectonepubcrawl.firebaseio.com",
    projectId: "projectonepubcrawl",
    storageBucket: "projectonepubcrawl.appspot.com",
    messagingSenderId: "1092612044151"
  };
  firebase.initializeApp(config);

  function loginWindowLoad(){
    // Hide all but the login button
    $("#logout").hide();
    $("#newNightOutInputDiv").hide();
    $("#joinANightOutDiv").hide();

  }

  window.onload = function(){
    loginWindowLoad();
  }