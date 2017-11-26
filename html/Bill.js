Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

var date = new Date();
date.yyyymmdd();

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

var date = new Date();
date.yyyymmdd();
var fortnightAway = new Date(+new Date + 12096e5);
fortnightAway.yyyymmdd();

function getpriority(card){
	
	var priority;
	
	if(fortnightAway.yyyymmdd() > card.date){
		priority = 2;
		}
	if(date.yyyymmdd() > card.date){
		priority = 3;
		}
	if(fortnightAway.yyyymmdd() < card.date){
		priority = 1;
		}
	if(card.paid){
		priority = 0;
		}
	
	card.priority = priority;
	return priority;
	};
	
function getdate(card){
	
	var dateString  = card.date.toString();
	var year        = dateString.substring(0,4);
	var month       = dateString.substring(4,6);
	var day         = dateString.substring(6,8);
	
	var output        = new Date(year, month-1, day);
	output = output.toDateString();
	card.datestr = output;
	};

function getdaysaway(card){
	
	var dateString  = card.date.toString();
	var year        = dateString.substring(0,4);
	var month       = dateString.substring(4,6);
	var day         = dateString.substring(6,8);
	
	var dateDue      = new Date(year, month-1, day);
	
	var today = new Date()
	var days =  parseInt((dateDue - today)/86400000) + 1;
	
	return days;	
	}

function createCard(card){

var priority = getpriority(card);
var datestr = getdate(card);
var days = getdaysaway(card);

if(card.myBill){
	payee = ' - (You are the recipient of this bill)';	
	}
	
else{
	payee = ' - Payable to ' + card.payee;
	}


var outlinewarning = 'class="card card-outline-warning"';
var outlinedanger = 'class="card card-outline-danger"';
var outlinesuccess = 'class="card card-outline-success"';
var outlinenothing = 'class="card"';

var textwarning = 'text-warning';
var textdanger = 'text-danger';
var textsuccess = 'text-success';
var textnothing = 'text';

var alertwarning = '<div class="alert">\
		  	<div class="alert alert-warning" role="alert">\
 				<strong>Due Soon!</strong> This bill is due in ' + days + ' days and you have not contributed fully.\
		  	</div>\
		  </div>';

var alertwarningmine = '<div class="alert">\
		  	<div class="alert alert-warning" role="alert">\
 				<strong>Due Soon!</strong> This bill is due in ' + days + ' days not everyone has contributed fully.\
		  	</div>\
		  </div>';

var alertdanger = '<div class="alert">\
		  	<div class="alert alert-danger" role="alert">\
 				<strong>Bill Overdue!</strong> The bill is past due and you have not completed payment.\
		  	</div>\
		  </div>';

var alertdangermine = '<div class="alert">\
		  	<div class="alert alert-danger" role="alert">\
 				<strong>Bill Overdue!</strong> The bill is past due and not everyone has completed payment.\
		  	</div>\
		  </div>';
		  
var alertsuccess = '<div class="alert">\
		  	<div class="alert alert-success" role="alert">\
 				<strong>Payed Up!</strong> This bill is fully payed.\
		  	</div>\
		  </div>';

var alertnothing = '';

var paybutton = '<a href="javascript:void(0)" onClick="PayCard('+ card.ID + 'popup' +')" class="btn btn-primary">Pay</a>';

var myoutline= '';
var mytext= '';
var myalert = '';
var mypay = '';

if(priority == 0){
	myoutline = outlinesuccess;
	mytext = textsuccess;
	myalert = alertsuccess;
	mypay = '';
	}
if(priority == 1){
	myoutline = outlinenothing;
	mytext = textnothing;
	myalert = alertnothing;
	mypay = paybutton;
	}
if(priority == 2){
	myoutline = outlinewarning;
	mytext = textwarning;

	if(card.myBill){
	myalert = alertwarningmine;
	mypay = '';
		}
		
	else{
	myalert = alertwarning;
	mypay = paybutton;
		}

	}
if(priority == 3){
	myoutline = outlinedanger;
	mytext = textdanger;

	if(card.myBill){
	myalert = alertdangermine;
	mypay = '';
		}
		
	else{
	myalert = alertdanger;
	mypay = paybutton;
		}
	}
	
	var newcontent = document.createElement(card.ID);
    newcontent.innerHTML = '<div id="' + card.ID + '" class="container">\
		<div  style="background:white"' + myoutline + '>\
		  <date style="display:none">' + card.date +'</date>\
		  <name style="display:none">' + card.name + '</name>\
		  <category style="display:none">' + card.category + '</category>\
		  <priority style="display:none">' + priority + '</priority>\
          <div class="card-header">\
		    <div style="float:right">\
			<a style="text-decoration:none; color:black;" href="javascript:void(0)" onClick="HideCard(' + card.ID + ')">\
			<strong>X</strong>\
			</a>\
			</div>\
            ' + card.category + payee + '\
		  </div>\
		  <div class="card-block">\
		    <div class="card-title">\
            <h4 style="float:right" class="' + mytext + '">' + card.ammount + '$' + '</h4>\
            <h4>' + card.name + '</h4>\
            </div>\
		    <p class="card-group">' + card.description + '</p>\
			' + mypay + '\
            <br></br>\
              <div class="card-footer text-muted">\
                Bill due:  ' + card.datestr + '\
              </div>\
		  </div>' + myalert + '\
		</div>\
	   <br/>\
    </div>';	
	document.getElementById("card-container").appendChild(newcontent);
	}

function createPopup(card, index){
	
	var hide = 'style = "display:none"';
	var mypaypal = '';
	var mytransfer = '';
	var mycash = '';

	if(card.paypal){
		var mypaypal = '<button onclick = "payPopup('+ card.ID + 'popup, ' + index + ')" id="payit">Credit Card</button>';
	}
	if(card.transfer){
		var mytransfer = '<button onclick = "payPopup('+ card.ID + 'popup, ' + index + ')" id="payit">Direct Deposit</button>';
	}
	if(card.cash){
		var mycash = '<button onclick = "payPopup('+ card.ID + 'popup, ' + index + ')" id="payit">Cash</button>';
	}
		
    var newcontent = document.createElement(card.ID + 'popup');
    newcontent.innerHTML = '<div id="' + card.ID + 'popup' + '" style="position:fixed;width:50%; height:50%; left:25%; top:25%; background:grey; display:none; z-index:2">\
	<div style="position:absolute; width:90%; height:90%; left:5%; top:5%">\
	<h4 style="color:white;text-align:center;font-size:50px;">' + card.name + '</h4>\
    <a href="#" onClick="closepopup(' + card.ID + 'popup' +')" style="text-decoration:none; color:black; font-size:30px;position:absolute; right:10px; top:10px"><strong>X</strong></a>\
    <br/><br/><br/>\
    <h3 style="color:white;float:left">Ammount Due: &nbsp;</h3>\
    <h3 style="color:red">' + card.ammount + '</h3>\
    <br/><br/><br/>\
    <h3 style="color:white;">Pay using:</h3>'
	+ mypaypal + mytransfer + mycash + '</div></div>';		
	document.getElementById("popup-container").appendChild(newcontent);
	
	
	}

var billArray = [];

function closepopup(id) {
	$(id).css("display", "none");
};

function PayCard(id) {
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
	$(id).css("display", "block");
}

function payPopup(id, index) {
	billArray[index].paid = true;
	$(id).css("display", "none");
	refreshCards()
}

function create(card){
		var index = billArray.length;
		billArray.push(card);
		
	    createCard(card);
		createPopup(card, index);
	}

function recreate(card){
	    createCard(card);
		createPopup(card, index);
	}
