$(document).ready(function(){
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

function validate(){
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
	document.location.href = ('Main_Page_Dummy_Bill.html');
	}
}

function question(){
	$('#question').css("display", "block");
	}

function closequestion(){
	$('#question').css("display", "none");
	}