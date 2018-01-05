var events = [];
var eventCounter = 0;


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
//will need to create a form for entering for each persons cost at each place
    $(".eventList").append(event.title + ":   " + "<br>");

    $(".eventList").append("<form> <input type='text' name='Event' value='' id = 'cost" + eventCounter + "'>");
    $(".eventList").append("<input type='submit' value='Cost' id='costSubmit" + eventCounter + "'> </form> <br>");
    eventCounter++;
    events.push(event);
    costButtons();

    console.log("Am i entering this loop")
})
//each user will have an object of their own something like this probably needs to be in an array
$("#userSubmit").on("click", function(e){
	e.preventDefault();
	var user = {
	userName: $("#userName").val().trim(),
	userNum: counter,
	total: 0,
	}

	console.log(user.userName);
})
function costButtons(){
for(var i = 0; i < eventCounter; i++){
	console.log($("#cost" + i).val());
	$("#costSubmit" + i).on("click", function(e){
		e.preventDefault();
		var pay = $("#cost" + i).val().trim();
		pay = parseInt(pay);
		console.log(pay);
		events[i].cost += pay;

		$(".eventCost").html(event.cost);

		console.log(events[i].cost);	
	})
}
}


//They will then add theyre payment info.  How much they spent at each event.


//Each user will do this then the original user can choose to submit when all info is added  



//money will be divied up for who owes who.  Tricky part will be divying for people who were only there 
//for certain events 


// need a function that builds an object and pushes it into the event array

// variables that may be needed to do the math
