  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIyoNcQc7sOf_wYKAwMM5CwxFK-z5Ysyc",
    authDomain: "pub-crawl-21b1d.firebaseapp.com",
    databaseURL: "https://pub-crawl-21b1d.firebaseio.com",
    projectId: "pub-crawl-21b1d",
    storageBucket: "pub-crawl-21b1d.appspot.com",
    messagingSenderId: "478647783482"
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
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
});
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

  // Gets Yelp data
  // var apiKey = "ziosgzuBXwFq0dTRSuehNLtM-7EKhlEK4hQP55I9bELwdHPDUvgMhwCLuZ494aI4UKqLDWI1MVz7QEDsucFMk4aKKYnU1urDddyU7kWDMXI7tehe_EOLQHT9fGBFWnYx";
  // var queryURL = "https://api.yelp.com/v3/businesses/search?api_key=" + apiKey + "=Starbucks";
  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).done(function(response) {
  //     console.log("Queried Yelp");
  //   });
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
  $("#login-button").show();
};

// Start the page
loginWindowLoad();




