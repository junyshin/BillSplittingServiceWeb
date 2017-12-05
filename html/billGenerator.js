// var card1 = {
// 	ID : 'card1',
// 	date : 20171202,
// 	name : "Grocery trip with Dave & Tim",
// 	payee : "John Doe",
// 	payers : ["George", "John", "Paul"],
// 	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
// 	pay_costs : [100.32, 200.20, 43.28],
// 	pay_paid : [true, true, false, true],
// 	priority : null,
// 	ammount : 381.13,
// 	paid : false,
// 	myBill : false,
// 	category : "Food",
// 	datestr : null,
// 	description : "Owe money to Dave for that grocery trip",
// 	paypal : true,
// 	transfer : true,
// 	cash : true,
// 	repeat : "one time"
// }

var card1 = null;


var card2 = {
	ID : 'card2',
	date : 20180112,
	name : "Party Night",
	payee : "George G. Giollo",
	payers : ["George", "John", "Paul"],
	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
	pay_costs : [100.32, 200.20, 43.28],
	pay_paid : [true, false, false, true],
	priority : null,
	ammount : 123.67,
	paid : false,
	myBill : false,
	category : "Entertainment",
	datestr : null,
	description : "Preparations for George's back home party",
	paypal : false,
	transfer : true,
	cash : false,
	repeat : "one time"
}

var card3 = {
	ID : 'card3',
	date : 20171002,
	name : "Water Park Outting",
	payee : "Jane Doe",
	payers : ["George", "John", "Paul"],
	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
	pay_costs : [100.32, 200.20, 43.28],
	pay_paid : [false, false, false, true],
	priority : null,
	ammount : 181.12,
	paid : false,
	myBill : true,
	category : "Entertainment",
	datestr : null,
	description : "Jane paid everything for the water trip.",
	paypal : true,
	transfer : false,
	cash : true,
	repeat : "one time"
}

var card4 = {
	ID : 'card4',
	date : 20171201,
	name : "Appartment Rent",
	payee : "Simon Diddy",
	payers : ["George", "John", "Paul"],
	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
	pay_costs : [100.32, 200.20, 43.28],
	pay_paid : [false, true, false, true],
	ammount : 500.00,
	priority : null,
	paid : true,
	myBill : false,
	category : "Logging",
	datestr : null,
	description : "Rent payment including utilities",
	paypal : false,
	transfer : true,
	cash : true,
	repeat : "monthly"
}

var card5 = {
	ID : 'card5',
	date : 20160718,
	name : "Bottle service at da club",
	payee : "john.johny@mymail.ca",
	payers : ["George", "John", "Paul"],
	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
	pay_costs : [100.32, 200.20, 43.28],
	pay_paid : [true, true, false, false],
	ammount : 100.21,
	priority : null,
	paid : true,
	myBill : false,
	category : "Food",
	datestr : null,
	description : "Got bottle service at club Da Club.",
	paypal : false,
	transfer : true,
	cash : false,
	repeat : "one time"
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send( null );
    return xmlHttp.response;
}

$( document ).ready(function() {

	var id = JSON.parse(localStorage.user).email;
	var cards = JSON.parse(httpGet("../assets/php/retrieve_bills.php?user="+id));
	var card7 = cards[0];

    var url = "../assets/php/add_bill.php?id="+card5.ID+"&name="+card5.name+"&date="+card5.date+"&payee="+card5.payee+"&names="+card5.payers.toString()+"&mails="+card5.pay_mail.toString()+"&costs="+card5.pay_costs.toString()+"&paid="+card5.pay_paid.map(Number).toString()+"&cat="+card5.category+"&desc="+card5.description+"&paypal="+Number(card5.paypal)+"&transfer="+Number(card5.transfer)+"&cash="+Number(card5.cash)+"&repeat="+card5.repeat;
    var success = httpGet(url);

    var url2 = "../assets/php/update_bill.php?id="+card5.ID+"&name="+card2.name+"&date="+card5.date+"&payee="+card5.payee+"&names="+card5.payers.toString()+"&mails="+card5.pay_mail.toString()+"&costs="+card5.pay_costs.toString()+"&paid="+card5.pay_paid.map(Number).toString()+"&cat="+card5.category+"&desc="+card5.description+"&paypal="+Number(card5.paypal)+"&transfer="+Number(card5.transfer)+"&cash="+Number(card5.cash)+"&repeat="+card5.repeat;
    var success2 = httpGet(url2);

    card1 = cardConstructor(card7.id, card7.name, card7.due, card7.payeemail, card7.paynames.split(','), card7.paymail.split(','), card7.paycost.split(',').map(Number), card7.paypaid.split(',').map(Number), card7.category, card7.description, Number(card7.paypal), Number(card7.transfer), Number(card7.cash), card7.repeat);
	billArray.push(card1);
    localStorage.bills = JSON.stringify(billArray);
    generated();
});

