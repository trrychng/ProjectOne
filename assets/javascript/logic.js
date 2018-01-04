var data = [];
var people = ["terry", "ed", "robert", "ryan"];
var testpush= [];
var terryAmount;
var edAmount;
var robertAmount;
var ryanAmount;
var entry;
var users=[];

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




$("#adduser").on("click", function() { //add user to entry
	event.preventDefault();  //prevents reload page
	let newuser="";  //delare variable
	
	newuser = $("#adduserdata").val().trim() //retrieve value in adduserdata 
	userHtml='<div class="row"><div class="col-lg-6">'+newuser+'</div><div class="col-lg-6"><div class="input-group"></span><span class="input-group-addon">$</span><input id="'+newuser+'" type="text" class="form-control guest" aria-label="Text input with checkbox" value=0 ></div></div></div>' //HTML for new user
  
	console.log("add user "+newuser) //logging
 
	$("#adduserdata").val(""); //clear field for adduserdata when user is added
	$("#users").append(userHtml)  //append to user div
	
}); //eof




$("#submit").on("click", function() { //adding new entries to event
	event.preventDefault(); //prevents reload page

	var guests= []; //
	var data_val=$(".guest") //Grabs array with class of guest

	console.log($(".guest")); //logging

	  
	entry = $("#entry").val().trim(); //gets location information
  
    for (var i=0 ; i<data_val.length; i++){ //populates each data from class with guest
		let username = $(data_val[i]); //assigns data_val to username 
		console.log(username); //logging
		console.log(username.attr("id")); //logging
		console.log(username.val()); //logging
		
		guests.push({  //pushes data to guest array with values from input
			name : username.attr("id"), //username from id
			amount : username.val().trim() //from user into
			});


    }

	console.log(guests); //logging for guests object
  
  entry = {
	  location: entry,
	  GAPI: "google API", //Enter GOOGLE API
	  YAPI: "Yelp API", //Enter YELP API
	  guest: guests //guest object push into here
	  }
	  

	  data.push({ //top layer of OBJECT
		event: "EVENT1", //Current placeholder for EVENT1 -- this is the top layer
		entry: entry //adds object entry to main top layer EVENT
		});
	
	console.log(data); //logging for data object
  
  
  
    //$(".form-control").val("");  //clears all input
	
	let a=data.length-1; //counts the length of data and subjects 1 as array counts from 0 not 1;
	calculation(a); //passes a to determine which array to calculate
  
}); //eof


// function addEntry(events, cost) {
//   data.push({
//     entry: entry,
//     people: people,
    

//     });
// }






function calculation(a){
	
  let total=0;
  var guests = [];
  var guest;
  let x=0;
  var event;
  var entry;
  var caldata =[];
  let share = 0;
  
  for(i=0; i < data[a].entry.guest.length; i++ ){ //grabs the sum of entry [0]
		x = parseInt(data[a].entry.guest[i].amount);
		guest = data[a].entry.guest[i].name; //grab user name
		event = data[a].event        // event name
		entry = data[a].entry.location; //location of entry
		console.log(guest + " has contributed $" +x+ " to event: " +event+ " at location " + entry +".") //logging

		caldata.push({ //pushes guest data into array
		name: guest,
		amount: x
		});
		
	total += x; //gets total
	}

  share = total/data[a].entry.guest.length; // divide total by number of guest to get equal share.
  console.log("share amount is "+share) //logging

  $("#allocation").empty(); //clears previous html entries
  $("#allocation").append("<p>For Location: "+entry+". The split even amount is $" +share+ "</p"); //html append to div for split even amount
  
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

					$("#allocation").append("<p>"+iuser+ " gives $" +give+ " to "+xuser+" making "+iuser+" at $"+iamount+" and "+xuser+" at $"+xamount+"</p"); //html append to div allocation for which steps to take.

					console.log(JSON.stringify(caldata)); //logging after allocation
				}
			}
		}
	}
}//eof
  
  


    

  
    
 
  
  
  
  




function isInt(value) { //for later
  return !isNaN(value) && 
         parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
    

