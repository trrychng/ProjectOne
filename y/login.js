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

var database = firebase.database();

$("#createNightOut").on("click", sendToEvents)
// Sign out of google
$("#logout-button").on("click", signOut);
  // Click the button to sign in
$("#login-button").on("click", signIn);
// Functions for various features.  Logout not working.
function signOut(){
    event.preventDefault();

  // firebase.auth.signOut();
  loginWindowLoad();
  console.log("Signed out")
};
function sendToEvents(){
  // Grabs the input the user typed in
  var nightOutName = $("#newNightOutInput").val().trim();
  // Creates an object to send to Firebase
  var events = {
    nightOut: nightOutName,
  }
  // Sends the object to FireBase
  database.ref().push(events);
  // Clears the field 
  $("#newNightOutInput").val("");

};
// The action that signs in
function signIn(){
  console.log("I clicked the login button");
  $("#logout-button").show();
  $("#newNightOutInputDiv").show();
  $("#joinANightOutDiv").show();
  $("#login-button").hide();

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
}
function loginWindowLoad(){
  // Hide all but the login button
  $("#logout-button").hide();
  $("#newNightOutInputDiv").hide();
  $("#joinANightOutDiv").hide();
};

// Start the page
loginWindowLoad();




