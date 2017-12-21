  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRhYl1gkRTO-LWYYjM5C_58wNL7YhtAhM",
    authDomain: "pubcrawl-c0163.firebaseapp.com",
    databaseURL: "https://pubcrawl-c0163.firebaseio.com",
    projectId: "pubcrawl-c0163",
    storageBucket: "",
    messagingSenderId: "823634442750"
  };
  firebase.initializeApp(config);

  function loginWindowLoad(){
    // Hide all but the login button
    $("#logout-button").hide();
    $("#newNightOutInputDiv").hide();
    $("#joinANightOutDiv").hide();
    // Click the button in order to login
    $("#login-button").on("click", function(event) {
      console.log("I clicked the login button");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      });

  });

  }
  window.onload = function(){
    loginWindowLoad();
  }
  