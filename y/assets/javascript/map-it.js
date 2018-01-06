// Google Maps Api
// key=AIzaSyApjrufEPdTBCc96n5ORf6Wi-ImE3L7YzQ

    	var lat = 40.72;
    	var lng = -73.96;

		function initMap() {
		  var uluru = {lat: lat, lng: lng};
		  var map = new google.maps.Map(document.getElementById('map'), {
		    center: uluru,
		    zoom: 15,
		    styles: [{
		      featureType: 'poi',
		      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
		    }, {
		      featureType: 'transit.station',
		      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
		    }],
		    disableDoubleClickZoom: true
		  });	  
	      var marker = new google.maps.Marker({
	        position: uluru,
	        map: map
	      });
		}

		function showResult(result) {
		    document.getElementById('latitude').value = result.geometry.location.lat();
		    document.getElementById('longitude').value = result.geometry.location.lng();

		    lat = result.geometry.location.lat();
		    lng = result.geometry.location.lng();

		    initMap();
		}

		function getLatitudeLongitude(callback, address) {
		    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
		    address = address || 'Ferrol, Galicia, Spain';
		    // Initialize the Geocoder
		    geocoder = new google.maps.Geocoder();
		    if (geocoder) {
		        geocoder.geocode({
		            'address': address
		        }, function (results, status) {
		            if (status == google.maps.GeocoderStatus.OK) {
		                callback(results[0]);
		            }
		        });
		    }
		}

		var button = document.getElementById('btn');

		button.addEventListener("click", function () {
		    var address = document.getElementById('address').value;
		    getLatitudeLongitude(showResult, address)
		});
