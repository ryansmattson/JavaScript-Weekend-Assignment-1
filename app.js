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

//final array showing how much is paid out to each client
//Paid out $' + amount + ' for ' + claim.patientName

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

console.log(initialList);

//function to determine percent covered
function percentageCovered(claim){

	var percent = 0;
//calculate how what percentage of the claim is covered for each visitType.
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
//return the percentage of the claim covered.
	return percent;
}

//function to determine amount covered and log out for each patient.
function amountCovered(claim){
	var paidOutPerClient = '';
	var percent = percentageCovered(claim);
//amount paid out rounded to the nearest dollar amount.
	var amount = Math.round(claim.visitCost * (percent / 100));
//add to the total money paid out.  Logged at the end.
	totalPayedOut += amount;
	paidOutPerClient += ('Paid out $' + amount + ' for ' + claim.patientName);
//add new ol item for each client's details
	$('.list ol').append('<li>'+paidOutPerClient+'</li>');
	console.log('Paid out $' + amount + ' for ' + claim.patientName);
}

//iterate through the claims array.
for (var i = 0; i < initialList.length; i++) {
	amountCovered(initialList[i]);
}

//log out the total amount paid out.
$('.list ul').append('<li>Total paid out: $'+totalPayedOut+'</li>');
console.log('Total paid out: ', totalPayedOut);

//jQuery

})
