$(document).ready(function(){

var claim1 = new Claim('John Doe', 'Specialist', 1100);

var claim2 = new Claim('Jane Doe', 'Optical', 100);

var claim3 = new Claim('Joe Johnson', 'Emergency', 31000);

var claim4 = new Claim('Sharon Smith', 'Emergency', 1300);

var claim5 = new Claim('Steve Wright', 'Primary Care', 770);

var claim6 = new Claim('Ryan Mattson', 'Optical', 150);

var claim7 = new Claim('Ryan Mulcahy', 'Emergency', 13000);

var claim8 = new Claim('Joel Miller', 'Specialist', 8000);

var claim9 = new Claim('Bob Johnson', 'Specialist', 300);

var claim10 = new Claim('John Deer', 'Primary Care', 500);

var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10]

var totalPayedOut = 0;


function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}


//Function to determine percent covered
function percentageCovered(claim){

	var percent = 0;
	//Calculate how what percentage of the claim is covered for each visitType.
	switch(claim.visitType) {
		case 'Optical':
			percent = 0;
			break;
		case 'Specialist':
			percent = 10;
			break;
		case 'Emergency':
			percent = 100;
			break;
		case 'Primary Care':
			percent = 50;
			break;
	}
	//Return the percentage of the claim covered.
	return percent;
}

//Function to determine amount covered and log out for each patient.
function amountCovered(claim){
	var paidOutPerClient = '';
	var percent = percentageCovered(claim);
	//Amount paid out rounded to the nearest dollar amount.
	var amount = Math.round(claim.visitCost * (percent / 100));
	//Add to the total money paid out.  Logged at the end.
	totalPayedOut += amount;
	paidOutPerClient += ('Paid out $' + amount + ' for ' + claim.patientName);
	//Add new ol item for each client's details
	$('.list ol').append('<li>'+paidOutPerClient+'</li>');
	console.log('Paid out $' + amount + ' for ' + claim.patientName);
}

//Iterate through the claims array.
for (var i = 0; i < initialList.length; i++) {
	amountCovered(initialList[i]);
}

//Add total amount.  Highlight li items and total.
$('.list ul').append('<li>Total paid out: $'+totalPayedOut+'</li>');
$('.list ol li:even, .list ul').css('background-color', '#ced9e4');

//log out the total amount paid out.
console.log('Total paid out: ', totalPayedOut);

})
