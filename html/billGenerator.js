var billArray = [];


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


    // var url = "../assets/php/add_bill.php?id="+card5.ID+"&name="+card5.name+"&date="+card5.date+"&payee="+card5.payee+"&names="+card5.payers.toString()+"&mails="+card5.pay_mail.toString()+"&costs="+card5.pay_costs.toString()+"&paid="+card5.pay_paid.map(Number).toString()+"&cat="+card5.category+"&desc="+card5.description+"&paypal="+Number(card5.paypal)+"&transfer="+Number(card5.transfer)+"&cash="+Number(card5.cash)+"&repeat="+card5.repeat;
    // var success = httpGet(url);
    //
    // var url2 = "../assets/php/update_bill.php?id="+card5.ID+"&name="+card2.name+"&date="+card5.date+"&payee="+card5.payee+"&names="+card5.payers.toString()+"&mails="+card5.pay_mail.toString()+"&costs="+card5.pay_costs.toString()+"&paid="+card5.pay_paid.map(Number).toString()+"&cat="+card5.category+"&desc="+card5.description+"&paypal="+Number(card5.paypal)+"&transfer="+Number(card5.transfer)+"&cash="+Number(card5.cash)+"&repeat="+card5.repeat;
    // var success2 = httpGet(url2);

	for(var i = 0; i < cards.length; i++){
        cardConstructor(i, cards[i].id, cards[i].name, cards[i].due, cards[i].payeemail, cards[i].paynames.split(','), cards[i].paymail.split(','), cards[i].paycost.split(',').map(Number), cards[i].paypaid.split(',').map(Number), cards[i].category, cards[i].description, Number(cards[i].paypal), Number(cards[i].transfer), Number(cards[i].cash), cards[i].repeat);
	}
	localStorage.bills = JSON.stringify(billArray);
	generated();

});

