var data = [];
var entry;
var users=[];
var selectPlace;

// function renderButtons() {

//   $("#buttons-view").empty();

//   for (var i = 0; i < people.length; i++) {
//     var a = $("<button>");
//     a.addClass("animal btn btn-default");
//     a.attr("data-name", animals[i]);
//     a.text(animals[i]);
//     $("#buttons-view").append(a);

//   }
// }


// $("#adduser").on("click", function() { //add user to entry
// 	event.preventDefault();  //prevents reload page
// 	let newuser="";  //delare variable
	
// 	newuser = $("#adduserdata").val().trim() //retrieve value in adduserdata 
// 	userHtml='<div class="row"><div class="col-lg-6">'+newuser+'</div><div class="col-lg-6"><div class="input-group"></span><span class="input-group-addon">$</span><input id="'+newuser+'" type="text" class="form-control guest" aria-label="Text input with checkbox" value=0 ></div></div></div>' //HTML for new user
  
// 	console.log("add user "+newuser) //logging
 
// 	$("#adduserdata").val(""); //clear field for adduserdata when user is added
// 	$("#users").append(userHtml)  //append to user div
	
// }); //eof



// $(".mod-header").on("click touchend", "button", function(event) {

//             var target = event.target;
//             // console.log( $(target) );

//             if ( $(target).hasClass("cancel-btn") ) {
//               // console.log("CANCEL");
//               resetForm();
//             }else
//             if ( $(target).hasClass("done-btn") ) {
//               // console.log("DONE");
//               event.preventDefault();
//               // EDIT EVENT HERE
//               newLocation();
//             }

//             $("body").removeClass();
//         });








// function addEntry(events, cost) {
//   data.push({
//     entry: entry,
//     people: people,
    

//     });
// }











function isInt(value) { //for later
  return !isNaN(value) && 
         parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
    

    var current_form =  $(".mod-content").find("#event-form");
    var event_teplate = $('#people-template').html();
    var event_list = $("#event-list");
    var person_list = $(".person-list");
    var mode;
    var saveInfo;

    var guest_field = '<input type="text" class="form-control guest" data-index="1" placeholder="NAME">';
    var amount_field = '<input type="text" class="form-control amount" data-index="1" placeholder="AMOUNT">';

    var event_id = event_list.find(".SELECTED").attr("id");

    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBRhYl1gkRTO-LWYYjM5C_58wNL7YhtAhM",
    authDomain: "pubcrawl-c0163.firebaseapp.com",
    databaseURL: "https://pubcrawl-c0163.firebaseio.com",
    projectId: "pubcrawl-c0163",
    storageBucket: "pubcrawl-c0163.appspot.com",
    messagingSenderId: "823634442750"
    };
    
    firebase.initializeApp(config);

    var database = firebase.database();

// Child Added
  database.ref("events").on("child_added", function(snapshot) {
    data = snapshot.val();

    console.log(data);

    renderList(data);
  });

// Add New Event
    function renderList(data) {

      if ( data == null) return;

      event_list.find("li").removeClass("SELECTED");
      
      var event_templete = '<li class="list-group-item event-item">';
        
      var event_item = $(event_templete);

      event_item.text(data.place).attr("id", data.place).addClass("SELECTED");
      
      event_list.prepend(event_item);
    };


    function addEvent() {
      currentUser=[]
        var form = form;
        var users= []; //
        var data_val=$(".guest") //Grabs array with class of guests


        var event_name = $("#place-event").val().trim();
        var event_loc = $("#loc-event").val().trim();
        let sum=0;





        if ( event_name !== "" ) {


       
  
          // for ( var i = 0; i < guestList.length; i++) {
          //   var name = $(guestList[i]).val().trim();
          //   var amount = $(userAmount[i]).val();
            
          //   data.users.push( [name, amount] );
          // };



         for (var i=0 ; i<data_val.length; i++){ //populates each data from class with guest
		let username = $(data_val[i]); //assigns data_val to username 
		console.log(username); //logging
		console.log(username.attr("id")); //logging
		console.log(username.val()); //logging
		
		users.push({  //pushes data to guest array with values from input
			name : username.attr("id"), //username from id
			amount : username.val().trim() //from user into
			});

		console.log(users);




		 sum = sum+parseInt(username.val());
  	

    	};

    	   var data = {
            place : event_name,
            location : event_loc,
            users: users,
            amount: sum
          }

        database.ref("events/" + event_name).set(data);

        }

        resetForm();
    };




// function newLocation() { //adding new entries to event
// 	 //prevents reload page

// 	var guests= []; //
// 	var data_val=$(".guest") //Grabs array with class of guest

// 	console.log($(".guest")); //logging

// 	place = $("#place-event").val().trim(); //gets location information
// 	location = $("#loc-event").val().trim(); //gets location information
  
//     for (var i=0 ; i<data_val.length; i++){ //populates each data from class with guest
// 		let username = $(data_val[i]); //assigns data_val to username 
// 		console.log(username); //logging
// 		console.log(username.attr("id")); //logging
// 		console.log(username.val()); //logging
		
// 		guests.push({  //pushes data to guest array with values from input
// 			name : username.attr("id"), //username from id
// 			amount : username.val().trim() //from user into
// 			});


//     };

// 	console.log(guests); //logging for guests object
  
//   entry = {
//   	  place: place,
// 	  location: location,
// 	  // GAPI: "google API", //Enter GOOGLE API
// 	  // YAPI: "Yelp API", //Enter YELP API
// 	  guest: guests //guest object push into here
// 	  }
	  

// 	  data.push({ //top layer of OBJECT
// 		event: "EVENT1", //Current placeholder for EVENT1 -- this is the top layer
// 		entry: entry //adds object entry to main top layer EVENT
// 		});
	
// 	console.log(data); //logging for data object
  
  
  
//     //$(".form-control").val("");  //clears all input
	
// 	let a=data.length-1; //counts the length of data and subjects 1 as array counts from 0 not 1;
// 	// calculation(a); //passes a to determine which array to calculate
  	
// }; //eof


let currentUser=[];

// add additional users
$(".add-guest-btn").on("click touchend", function(event) {
	let newuser="";
  
	var guest_field = '<input type="text" class="form-control guest" data-index="1" placeholder="NAME">';
  var amount_field = '<input type="text" class="form-control amount" data-index="1" placeholder="AMOUNT">';
  var guestInputs = $(".guest-list");
  var i = guestInputs.find(".guest").length + 1;
  var add_input = $(guest_field).attr("data-index", i);
  newuser = $("#adduserdata").val().trim() //retrieve value in adduserdata 
	userHtml='<div class="input-group"><span class="input-group-addon">'+ newuser + '</span><input id="'+newuser+'" type="text" class="form-control guest" value=0 placeholder="amount"></div>' //HTML for new user
 


  if ( newuser === "" ) {
    alert("Please enter name");
  }
  else if (currentUser.indexOf(newuser) !== -1){
    alert("The Name "+newuser+" exist! Please enter unique name!");

  }
  else{
    $("#adduserdata").val("")
    
    guestInputs.append(userHtml);
    currentUser.push(newuser);
    console.log(currentUser)
 }


 });




    var current_form =  $(".mod-content").find("#event-form");
    var event_teplate = $('#people-template').html();
    var event_list = $("#event-list");
    var person_list = $(".person-list");
    var mode;
    var saveInfo;
    var guest_field = '<input type="text" class="form-control guest" data-index="1" placeholder="NAME">';
    var amount_field = '<input type="text" class="form-control amount" data-index="1" placeholder="AMOUNT">';
    var current_selec;
    var event_id = event_list.find(".SELECTED").attr("id");
    var editForm = $("#edit-form");
    var remove_button = '<span class="glyphicon glyphicon-remove-circle remove-btn"></span>';


    function editEvent() {
      editForm.empty();
      var eventName_input = $('#edit-name-event');
      var eventLoc_input = $('#edit-loc');
      var guestName_input = '<input type="text" class="form-control guest" data-index="0" placeholder="NAME">';
      var appendItems = [];
      var editInputs = $(".edit-list");
      database.ref("events").once("value", function(snapshot){
          var data = snapshot.val();
          
          var users = data[current_selec].users;
          for (var i = 0; i < users.length; i++ ) {
            var name = users[i].name;
            var amount = users[i].amount;
            var guestInput = guest_field;
            var amountInput = amount_field;
            var div = $('<div class="group-entry">')
            div.html( remove_button + guestInput +  amountInput);
            div.find(".guest").val(name);
            div.find(".amount").val(amount);
            editForm.append(div);
          }
          removeField();

      });
    };
    function removeField() {
      $(".remove-btn").on("click touchend", function() {
          $(this).parent().remove();
      });
    };




    function editEvent(){
      // var data = eventData.find( function(x) { return x.eventName == event_id } );

      // $("#name-event").val(data.eventName);
      // $("#loc-event").val(data.eventLoc);
    };

    function setData() {
        var event_name = $("#name-event").val().trim();
        var event_loc = $("#loc-event").val().trim();

    };

    function resetForm() {
      var div = $("<div>")


      current_form.find(".guest-list").html(div);
      current_form.find("input").val("");
    };
      $(document).ready(function(){

        $("#loginBtn").on("click", function(){
            $("#loginModal").modal();
            // console.log("GO");
        });

        // On click for Add and Edit button
        $(".section-header").on("click touchend", "button", function(event) {
            var target = $(this);
            var active = target.parents(".active").attr("id");
            $("#name-event").focus();
            
            if ( $(target).hasClass("add-btn") ) {
              $("body").addClass("ADDING");
              mode = "ADD";
              // ADD event function
              // Set function to addEvent
              saveData = addEvent;

            }else
            if ( $(target).hasClass("edit-btn") ) {
              $("body").addClass("EDITING");
              mode = "EDIT";
              // EDIT event function
              editEvent();
              // Set function to setData
              saveData = setData;

            }else {

            }
            // console.log(target);
        });

        $(".mod-header").on("click touchend", "button", function(event) {
            var target = event.target;
            // console.log( $(target) );

            if ( $(target).hasClass("cancel-btn") ) {
              // console.log("CANCEL");
            
              resetForm();

            }else
            if ( $(target).hasClass("done-btn") ) {
              // console.log("DONE");
            
              // EDIT EVENT HERE
              saveData();
            }

            $("body").removeClass();
        });
// // Add new guest
//         $(".add-guest-btn").on("click touchend", function(event) {
//           var guestInputs = $(".guest-list");
//           // var i = guestInputs.find(".guest").length + 1;
//           // var add_input = $(guest_field).attr("data-index", i);

//           var div = $("<div>")
//           div.append(guest_field);
//           div.append(amount_field);
//           guestInputs.append(div);

//         });

// Add class SELECTED on Event when clicked


        $("#event-list").on("click touchend", ".event-item", function(event) {
            $(this).parent().find("li").removeClass("SELECTED");
            var target = event.target;
            $(target).addClass("SELECTED");
            event_id = event_list.find(".SELECTED").attr("id");
            
            console.log(event_id);
            $("#display").empty();
            $(".event-title").text(event_id);            
            
            database.ref("events").once("value", function(snapshot){
              var data = snapshot.val();
              console.log(data)
              $(".event-loc").text(data[event_id].location);
              
              $(".event-amount").text('$'+ data[event_id].amount);

              selectPlace=data[event_id];
			  

              console.log(selectPlace)
			  googleMapAPI(selectPlace)
			  
              var users = data[event_id].users;
              console.log(users)
              for (var i = 0; i < users.length; i++) {
                var name = users[i].name;
                var value = users[i].amount;

                console.log(name);
              }
              
              // $("#display").html("");
              

              // $("#display").append( );


            });

        });

      });




$("#calc").on("click touchend", function(event) {



$("#display").empty();
calculation();

	

});




function calculation(){
	
  let total=0;
  var guests = [];
  var guest;
  let x=0;
  var event;
  var entry;
  var caldata =[];
  let share = 0;
  
  for(i=0; i < selectPlace.users.length; i++ ){ //grabs the sum of entry [0]
		x = parseInt(selectPlace.users[i].amount);
		guest = selectPlace.users[i].name; //grab user name
		// event = data[a].event        // event name
		// entry = data[a].entry.location; //location of entry
		// console.log(guest + " has contributed $" +x+ " to event: " +event+ " at location " + entry +".") //logging

		caldata.push({ //pushes guest data into array
		name: guest,
		amount: x
		});
		
	total += x; //gets total
	}

  share = total/selectPlace.users.length; // divide total by number of guest to get equal share.
  console.log("share amount is "+share) //logging

  // $("#display").empty(); //clears previous html entries
  // $("#display").append("<p>For Location: "+entry+". The split even amount is $" +share+ "</p"); //html append to div for split even amount
  
  console.log(caldata); //logging
  
  distribution(caldata, share); //passes caldata, share variables to distribution function
}//eof


function distribution (caldata, share){
  
	for(var i=0; i < caldata.length; i++ ){
		iuser = caldata[i].name; 
		iamount = caldata[i].amount;
		//console.log(iamount)
		
		if(iamount < share){
			for(var x=0; x < caldata.length; x++){
				xuser = caldata[x].name;
				xamount = caldata[x].amount;
				
				if(share < xamount && iamount !== share){
					let give=0
					give=share-iamount
					//console.log(give)
					
					if(give > xamount-share ){ //checks if give is will cause the x-user to be over otherwise get min.
						give=xamount-share
					}
						
					console.log(JSON.stringify(caldata)); //logging before allocation
					caldata[i].amount=iamount+give //adjust the value given.
					caldata[x].amount=xamount-give //adjust max value
					
					iamount = caldata[i].amount //updates value in object in iuser
					xamount = caldata[x].amount //updates value in object in xuser
					
					
					console.log(iuser+ " + " +give+ " to "+xuser+ " - "+give);

					$("#display").append(
          "<p>"+iuser+ " gives $" +give+ " to "+xuser+" making "+iuser+" at $"+iamount+" and "+xuser+" at $"+xamount+"</p"); //html append to div allocation for which steps to take.

					console.log(JSON.stringify(caldata)); //logging after allocation
				}
			}
		}
	}
}//eof





var lat;
var lng;

function zomatoAPI(lat, lng) {
	var api = "07fb2fd782ce7a28dadddf704c580aea"
	var url = "https://developers.zomato.com/api/v2.1/geocode?lat="+lat+"&lon="+lng+"&apikey="+api
	
	
	  $.ajax({
	  url: url,
	  method: 'GET',
	  }).done(function(result) {
		  
		  
		  
		  data=result;
		  
		  nearBy(data);
		  console.log(result)
  
		  
})

}
	
function nearBy(data){
	console.log(data.nearby_restaurants)
	$("#near").empty();
	for(i = 0 ; i < data.nearby_restaurants.length; i++)
	{
	
	var restaurant=data.nearby_restaurants[i].restaurant;
	
	$("#near").append('<div class="venue-item"><li class="venue-name">' +restaurant.name + '<li class="venue-address">' + restaurant.location.address);
		
		
		
	}
	
}



	
function googleMapAPI(selectPlace) {
	var api = "AIzaSyAE2QXwu_BlcPaXEGiKqajbr0pGwKnF3dM"
	lat=0;
	lng=0;
	
	console.log(selectPlace.location)
	
	var addString = selectPlace.location.split(' ').join('+');

	var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+addString+"&key="+api
	
	
	  $.ajax({
	  url: url,
	  method: 'GET',
	  }).done(function(result) {
		  
		  
		  
		  
		  data=result
		  
		  console.log(data)
		  lat=data.results[0].geometry.location.lat;
		  lng=data.results[0].geometry.location.lng;
		  
		  
		  console.log(lat);
		  
		  
		   initMap(lat,lng);
		   zomatoAPI(lat, lng);
		   
		  
})


	
}
	
	




$("#mapbutton").on("click touchend", function(event) {
    setTimeout(function() {
      initMap(lat, lng);
      google.maps.event.trigger(map, 'resize');
    }, 250);

console.log("hi i am on click")

console.log(lat)


  

});



 function initMap(lat, lng) {
      var uluru = {lat: lat, lng: lng};
      console.log(lat);
      console.log(lng);
      console.log(uluru);

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    console.log(map)
    console.log(marker)

  }
