function calculateTip() {
	var billamt = document.getElementById("billamt").value;
	var service = document.getElementById("service").value;
	var noOfPeople = document.getElementById("noOfPeople").value;

	//validate input
  	if (billamt === "" || service == 0) {
    	alert("Please enter values");
    	return;
  	}
  	//Check to see if this input is empty or less than or equal to 1
  	if (noOfPeople === "" || noOfPeople <= 1) {
    	noOfPeople = 1;

    	document.getElementById("each").style.display = "none";
  	} else {
    	document.getElementById("each").style.display = "block";
  	}

  	//calculate tip
	var total = (billamt * service) / noOfPeople;
	total = Math.round(total * 100) / 100;
 
  	//show the tip amount on load
  	document.getElementById("totalTip").style.display = "block";
  	document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};