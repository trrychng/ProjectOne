var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcdn9swuJs48KM8YOZhNlAT6uIz_ytGjw&libraries=places&callback=initMap";

$.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {

    })


src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcdn9swuJs48KM8YOZhNlAT6uIz_ytGjw&libraries=places&callback=initMap"

	var latit;
	var long;
	var x = document.getElementById("map");

function getLocation() {
	console.log("is this being called first?");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    // console.log(navigator.geolocation.getCurrentPosition(showPosition));
}
	function initMap() {
		console.log("is this being called third?");
		console.log(latit);
		console.log(long);
		var location = {lat: latit, lng: long};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 10,
			center: location
		});
		var marker = new google.maps.Marker({
			position: location,
			map: map
		})
	}
function showPosition(position) {
	console.log("is this being called second?");
    latit = position.coords.latitude; 
    long = position.coords.longitude;
    console.log(latit);
    console.log(long);
    initMap();
}





getLocation();