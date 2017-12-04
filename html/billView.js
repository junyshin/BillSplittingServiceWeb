$( document ).ready(function() {
    var user;
    var selectedBill;
    selectedBill = JSON.parse(localStorage.viewedBill);
    user = JSON.parse(localStorage.user);

document.getElementById('username2').innerHTML = user.name;
document.getElementById('email').innerHTML = user.email;
document.getElementById('pageTitle').innerHTML = selectedBill.name;
document.getElementById('name').innerHTML = selectedBill.name;
document.getElementById('date').innerHTML = selectedBill.datestr;
document.getElementById('category').innerHTML = selectedBill.category;
document.getElementById('ammount').innerHTML = selectedBill.ammount.toFixed(2);

var total = 0;
for(i = 0; i < selectedBill.pay_costs.length; i++){
	total = total + selectedBill.pay_costs[i];
	}
total = total + selectedBill.ammount;
total = total.toFixed(2);


document.getElementById('total').innerHTML = total;
document.getElementById('comment').innerHTML = selectedBill.description;
document.getElementById('repeat').innerHTML = selectedBill.repeat;

if(selectedBill.paid || selectedBill.myBill){
document.getElementById('paid').innerHTML = "&#10004";
	}
else{
document.getElementById('paid').innerHTML = "&#10008";
	}

if(selectedBill.paypal){
document.getElementById('paypal').innerHTML = "&#10004";
	}
else{
document.getElementById('paypal').innerHTML = "&#10008";
	}

if(selectedBill.transfer){
document.getElementById('transfer').innerHTML = "&#10004";
	}
else{
document.getElementById('transfer').innerHTML = "&#10008";
	}
	
if(selectedBill.cash){
document.getElementById('cash').innerHTML = "&#10004";
	}
else{
document.getElementById('cash').innerHTML = "&#10008";
	}


for(index = 2; index < selectedBill.payers.length + 2; index++){
var checked = null;
var paid = null;

if(selectedBill.pay_paid[index-2]){
	checked = "&#10004";
	paid = 'style="color:green"';
	}
else{
	checked = "&#10008"
	paid = 'style="color:red"';
	}
	
var newPayer = document.createElement("tr");
newPayer.innerHTML	=	'<tr id=' + '1' + '>\
                <td class="text-center">\
                  '+ index +'\
                </td>\
                <td class="text-center">\
                  <h4>'+ selectedBill.payers[index-2] +'</h4>\
                </td>\
                <td class="text-center">\
                  <h4>'+ selectedBill.pay_mail[index-2] +'</h4>\
                </td>\
                <td '+ paid +' class="text-center">\
                  <h4>'+ selectedBill.pay_costs[index-2].toFixed(2) +'</h4>\
                </td>\
                <td class="text-center" id="paid">\
				'+ checked +'\
                </td>\
              </tr>'
	document.getElementById('payers').appendChild(newPayer);
}
});

