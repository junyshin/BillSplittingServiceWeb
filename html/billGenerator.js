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

	for(var i = 0; i < cards.length; i++){
        cardConstructor(i, cards[i].id, cards[i].name, cards[i].due, cards[i].payeemail, cards[i].paynames.split(','), cards[i].paymail.split(','), cards[i].paycost.split(',').map(Number), cards[i].paypaid.split(',').map(Number), cards[i].category, cards[i].description, Number(cards[i].paypal), Number(cards[i].transfer), Number(cards[i].cash), cards[i].repeat);
	}
	localStorage.bills = JSON.stringify(billArray);
	generated();

});

