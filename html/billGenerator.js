var card1 = {
	ID : 'card1',
	date : 20171202,
	name : "Grocery trip with Dave & Tim",
	payee : "John Doe",
	priority : null,
	ammount : 381.13,
	paid : false,
	myBill : false,
	category : "Food",
	datestr : null,
	description : "Owe money to Dave for that grocery trip",
	paypal : true,
	transfer : true,
	cash : true
}

var card2 = {
	ID : 'card2',
	date : 20180112,
	name : "Party Night",
	payee : "George G. Giollo",
	priority : null,
	ammount : 123.67,
	paid : false,
	myBill : false,
	category : "Entertainment",
	datestr : null,
	description : "Preparations for George's back home party",
	paypal : false,
	transfer : true,
	cash : false
}

var card3 = {
	ID : 'card3',
	date : 20171002,
	name : "Water Park Outting",
	payee : "Jane Doe",
	priority : null,
	ammount : 581.12,
	paid : false,
	myBill : true,
	category : "Entertainment",
	datestr : null,
	description : "Jane paid everything for the water trip.",
	paypal : true,
	transfer : false,
	cash : true
}

var card4 = {
	ID : 'card4',
	date : 20171201,
	name : "Appartment Rent",
	payee : "Simon Diddy",
	ammount : 500.00,
	priority : null,
	paid : true,
	myBill : false,
	category : "Logging",
	datestr : null,
	description : "Rent payment including utilities",
	paypal : false,
	transfer : true,
	cash : true
}

var card5 = {
	ID : 'card5',
	date : 20160718,
	name : "Bottle service at da club",
	payee : "John Doe",
	ammount : 100.21,
	priority : null,
	paid : true,
	myBill : false,
	category : "Food",
	datestr : null,
	description : "Got bottle service at club Da Club.",
	paypal : false,
	transfer : true,
	cash : false
}


$( document ).ready(function() {
	create(card1);
	create(card2);
	create(card3);
	create(card4);
	create(card5);
});

