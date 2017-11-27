var templateCard = {
	ID : null,
	date : null,
	name : null,
	payee : null,
	payers : null,
	pay_mail : null,
	pay_costs : null,
	pay_paid : null,
	priority : null,
	ammount : null,
	paid : null,
	myBill : null,
	category : null,
	datestr : null,
	description : null,
	paypal : null,
	transfer : null,
	cash : null,
	repeat : null
}

function findPayeeIndex(email_array, payee_email){
	for(i = 0; i < email_array.length; i++){
		if(payee_email == email_array[i]){
			return i;
		}
	}
}

function findUserIndex(email_array, user_email){
	for(i = 0; i < email_array.length; i++){
		if(user_email == email_array[i]){
			return i;
		}
	}
}

function cardConstructor(ID, name, due, payee_email, pay_names, pay_mail, pay_costs, pay_paid, category, description, paypal, transfer, cash, repeat) {
	var user = JSON.parse(localStorage.user);

	var payeeIndex = findPayeeIndex(pay_mail, payee_email);
	var userIndex = findUserIndex(pay_mail, user.email);
	
	var newCard = templateCard;
	newCard.ID = ID;
	newCard.name = name;
	newCard.date = parseInt(due);
	newCard.payee = pay_names[payeeIndex];
	
	newCard.ammount = pay_costs[userIndex];
	newCard.paid = pay_paid[userIndex];
	newCard.myBill = (payeeIndex == userIndex);
	
	newCard.category = category;
	newCard.description = description;
	newCard.paypal = paypal;
	newCard.transfer = transfer;
	newCard.cash = cash;
	newCard.repeat = repeat;

	pay_names.splice(userIndex, 1);
	pay_mail.splice(userIndex, 1);
	pay_costs.splice(userIndex, 1);
	pay_paid.splice(userIndex, 1);
	

	newCard.payers = pay_names;
	newCard.pay_mail = pay_mail;
	newCard.pay_costs = pay_costs;
	newCard.pay_paid = pay_paid;
	
	return newCard;
	}


var card1 = {
	ID : 'card1',
	date : 20171202,
	name : "Grocery trip with Dave & Tim",
	payee : "John Doe",
	payers : ["George", "John", "Paul"],
	pay_mail : ["george@gmail.com","john.johny@mymail.ca","paul78@mailmonster.com"],
	pay_costs : [100.32, 200.20, 43.28],
	pay_paid : [true, true, false, true],
	priority : null,
	ammount : 381.13,
	paid : false,
	myBill : false,
	category : "Food",
	datestr : null,
	description : "Owe money to Dave for that grocery trip",
	paypal : true,
	transfer : true,
	cash : true,
	repeat : "one time"
}

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
	payee : "John Doe",
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


$( document ).ready(function() {
	create(card1);
	create(card2);
	create(card3);
	create(card4);
	create(card5);
	
	card6 = cardConstructor("card6", "Internet plan", "20171130", "suzanne.me@payme.com", ["George Giollo","Suzanne Pelletier","Jane Doe"], ["George_foreman@grills.com", "suzanne.me@payme.com", "jane.doe@mail.com"], [100.32, 200.25, 238.90], [false, true, false], "Service", "Unlimited Internet connection we all share", true, true, false, "monthly");
	create(card6);
	generated();
});

