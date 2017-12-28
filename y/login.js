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
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  }).catch(function(error) {
  // An error happened.
});
  loginWindowLoad();
  console.log("Signed out")
};
// Getting yelp API data
// function yelpAPI(){ 
//   var placeName = $(this).attr("data-name");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lzcGYta9bfMdDiwu3ZImzoJH3rgRatgC&q=" + animalName + "&limit=10&offset=0&&lang=en";
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {
//       for (var i = 0; i < response.data.length - 1; i++) {
//         // Saves the URL for both still and moving GIFs into variables to use later
//         var stillGif = response.data[i].images.fixed_height_still.url;
//         var movingGif = response.data[i].images.fixed_height.url;
//         // Saves the rating into a variable for later
//         var rating = response.data[i].rating;
//         // creates an image tag to put into the HTML
//         var animalImage = $("<img>");
//         //Adds the src attribute and url to the image tag, and alt text, and still state
//         animalImage.attr("data-state", "still")
//         animalImage.attr("data-still", stillGif)
//         animalImage.attr("data-animate", movingGif)
//           animalImage.attr("src", stillGif);
//           animalImage.attr("alt", "animal image");
//           animalImage.addClass("gifType");
//           // Puts the GIF on the HTML
//           $("#gifs").prepend(animalImage, "rated: " + rating);

//         }
      
//     });
// };
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
  var apiKey = "ziosgzuBXwFq0dTRSuehNLtM-7EKhlEK4hQP55I9bELwdHPDUvgMhwCLuZ494aI4UKqLDWI1MVz7QEDsucFMk4aKKYnU1urDddyU7kWDMXI7tehe_EOLQHT9fGBFWnYx";
  var queryURL = "https://api.yelp.com/v3/businesses/search?api_key=" + apiKey + "=Starbucks";
  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log("Queried Yelp");
    });
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




