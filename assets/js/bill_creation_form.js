$(document).ready(function(){
var user = JSON.parse(localStorage.user);
var bills = JSON.parse(localStorage.bills);
document.getElementById('username2').innerHTML = user.name;
document.getElementById('email').innerHTML = user.email;

      var i=1;
     $("#add_row").click(function(){
      $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='e-mail'  class='form-control input-md'></td><td><input  name='ammount"+i+"' type='text' placeholder='Amount Due'  class='form-control input-md'></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
         if(i>0){
         $("#addr"+(i-1)).html('');
         i--;
         }
     });

});

var name= "";
var date= "";

function checkTextField(field) {
  document.getElementById("error").innerText =
    (field.value === "") ? "Please enter your bill a name" : "";
	name = field.value;
}


function checkDateField(field) {
  document.getElementById("errorDate").innerText =
    (field.value === "") ? "Please enter your a bill a due date" : "";
	date = field.value;
}



function arrayify(){
var user = JSON.parse(localStorage.user);
var pay_names_new = [];
var pay_mail_new = [];
var pay_costs_new = [];
var pay_paid_new = [];
var incomplete = false;

	var user = JSON.parse(localStorage.user);
	var number_of_payers = document.getElementById("payer_table").childElementCount;
	var top_payer_index = number_of_payers - 2;

	pay_names_new[0] = user.name;
	pay_mail_new[0] = user.email;
	pay_costs_new[0] = youammount.value;
	pay_paid_new[0] = false;
	
	var skipover = 0;
	
	for(i = 0; i <= top_payer_index; i++){
		var entryName = 'name' + i.toString();
		var entryMail = 'mail' + i.toString();
		var entryAmmount = 'ammount' + i.toString();
		var entryPaid = false;

		
		if(document.querySelector('[name="'+ entryName +'"]').value === "" || document.querySelector('[name="'+ entryMail +'"]').value === "" || document.querySelector('[name="'+ entryAmmount +'"]').value === ""){
			//alert('Entry number ' + (i + 1) + ' is incomplete and will be ignored');
			incomplete = true;
			skipover++;
			}
			
		else{
		pay_names_new[i+1 - skipover] = document.querySelector('[name="'+ entryName +'"]').value;
		pay_mail_new[i+1 - skipover] = document.querySelector('[name="'+ entryMail +'"]').value;
		pay_costs_new[i+1 - skipover] = document.querySelector('[name="'+ entryAmmount +'"]').value;
		pay_paid_new[i+1 - skipover] = entryPaid;
			}
		}

	return [pay_names_new, pay_mail_new, pay_costs_new, pay_paid_new, incomplete];
	}
	
function validate(){
	
var bills = JSON.parse(localStorage.bills);

var random = Math.random();
var random = random * 100000000000000000;

var newID = 'card' + (random).toString();
var new_pay = arrayify();

var pay_names = new_pay[0];
var pay_mail = new_pay[1];
var pay_costs = new_pay[2];
var pay_paid = new_pay[3];
var incomplete = new_pay[4];

var paypal = document.getElementById('paypal').checked;
var transfer = document.getElementById('etransfer').checked;
var cash = document.getElementById('cash').checked;

var description = document.querySelector('[name="comment"]').value;
var category = document.getElementById('inlineFormCustomSelect').value;
var repeat = document.getElementById('inlineFormCustomSelect2').value;

	var isname = false;
	var isdate = false;
	var isyouammount = false;
	var ispayment = false;
	var ispaypal = $("#paypal").is(":checked");
	var isetransfer = $("#etransfer").is(":checked");
	var iscash = $("#cash").is(":checked");
	var youammount = $("#youammount").val();
	

	
	if(name ===""){
		alert('Please give your bill a name. You can do this by writting a name of your choice in the text area to the left of Name of Bill');
	}
	else{
		isname = true;
	}
	if(date ===""){
		alert('Please give your bill a due date. You can do this by writting the date in month/day/year format in the text area to the left of Due Date.');
	}
	else{
		isdate = true;
		date = date.replace(/-/g, "");
		}
	
	if(youammount === ""){	
		alert('You are not contributing to this bill. Please enter the amount of this bill you owe in the text area next to your e-mail adress.');
	}
	else{
	isyouammount = true
	}
		
	if(!ispaypal && !isetransfer && !iscash){
		alert('Please select at least one payment option that people can pay your bill with.')
		}
	else{
		ispayment = true
		}

    
	if(isname && isdate && isyouammount && ispayment){
	
    var user = JSON.parse(localStorage.user);
    var createdCard = null;
    var createdCard = cardConstructor(newID, name, date, user.email, pay_names, pay_mail, pay_costs, pay_paid, category, description, paypal, transfer, cash, repeat);
    var billArray = JSON.parse(localStorage.bills);
    billArray.push(createdCard);
    localStorage.bills = JSON.stringify(billArray);

    var url = "../assets/php/add_bill.php?id="+newID+"&name="+name+"&date="+date+"&payee="+user.email+"&names="+pay_names.toString()+"&mails="+pay_mail.toString()+"&costs="+pay_costs.toString()+"&paid="+pay_paid.map(Number).toString()+"&cat="+category+"&desc="+description+"&paypal="+Number(paypal)+"&transfer="+Number(transfer)+"&cash="+Number(cash)+"&repeat="+repeat;
    var success = httpGet(url);


    document.location.href = ('Main_Page.html');
    }
}

function question(){
	$('#question').css("display", "block");
	}

function closequestion(){
	$('#question').css("display", "none");
	}