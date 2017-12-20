var events = [];

//first user will select number of events and give them names
$("#eventSubmit").on("click", function(e){
	e.preventDefault();
    console.log("submit on click works")
    var hold = $("#event").val().trim();

    var event = {
    	title: hold,
    	cost: 0,
    	attendees: []
    }

    events.push(event);

    console.log("Am i entering this loop")
	console.log(events);
})




//They will then add theyre payment info.  How much they spent at each event.
$("#costSubmit").on("click", function(e){
	e.preventDefault();
	var cost = $("#cost").val().trim();
	cost = parseInt(cost);
	console.log(cost);
	events[1].cost += cost;

	console.log(events[1].cost);
})



//Each user will do this then the original user can choose to submit when all info is added  




//money will be divied up for who owes who.  Tricky part will be divying for people who were only there 
//for certain events 


// need a function that builds an object and pushes it into the event array

// variables that may be needed to do the math
