$( document ).ready(function() {
var user = JSON.parse(localStorage.user);

document.getElementById('username').innerHTML = user.name;

$('#clr').hide();




$("#search-criteria").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});
	$('#clr').on('click', function () {
				$('.container').each(function(){
			   		$(this).show();
					})
				$('#clr').hide();
				});

	$('#search').click(function(){
		$('.container').hide();
		var txt = $('#search-criteria').val();
		$('.container').each(function(){
		   if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
			   $(this).show();
		   }
		   else{
			   $(this).hide();
			}	
			$('#clr').show();
		});
     document.getElementById("search-criteria").value = "";

	});
});


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    if(property == "name") {
        return function (a, b) {
            var result = (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
            return result * sortOrder;
        }
    }
    else {
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}

$( document ).ready(function() {
	var alphBntClk = false;
	var numBtnClk = false;
	var catBtnClk = false;
	var priorBtnClk = false;

	$('#alphBnt').on('click', function () {	
		if(!alphBntClk){	
		billArray.sort(dynamicSort("name"));
		}
		else{
		billArray.sort(dynamicSort("name"));
		billArray.reverse();
		}
		refreshCards();		
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 0);
		alphBntClk = !alphBntClk;
	});
	
	$('#numBnt').on('click', function () {
		if(!numBtnClk){
		billArray.sort(dynamicSort("date"));
		}
		
		else{
		billArray.sort(dynamicSort("date"));
		billArray.reverse();
		}
		refreshCards();		
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 1);
		numBtnClk = !numBtnClk;	
});

	$('#catBnt').on('click', function () {
		if(!catBtnClk){	
		billArray.sort(dynamicSort("category"));
		}
		
		else{
		billArray.sort(dynamicSort("category"));
		billArray.reverse();
		}
		refreshCards();		
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 2);
		catBtnClk = !catBtnClk;
});	
	
	$('#priorBnt').on('click', function () {
		if(!priorBtnClk){
		billArray.sort(dynamicSort("priority"));
		}
		
		else{
		billArray.sort(dynamicSort("priority"));
		billArray.reverse();
		}
		refreshCards();		
		selected(alphBntClk,numBtnClk,catBtnClk,!priorBtnClk, 3);
		priorBtnClk = !priorBtnClk;	
	});
});

function generated(){
	billArray.sort(dynamicSort("priority"));
	billArray.reverse();
	refreshCards();
}

function reorderCards(order) {

	var newArray = [];
	
		for(index = 0; index < billArray.length; index++){
		newArray[order[index]] = billArray[index];		
		}
		
		billArray = newArray;
		
		refreshCards();
		
	}

var duegoto = true;

function HideCard(card) {
	duegoto = false;
    var billArray = JSON.parse(localStorage.bills);
    var index = JSON.parse(localStorage.selectedBill);
    var searchString = "card" + index.toString();
    var IDArray = [];
    for(var i = 0; i <billArray.length; i++){
        IDArray[i] = billArray[i].ID;
    }
    var indexfound = IDArray.indexOf(searchString);
    var selectedBill = billArray[indexfound];
	$(selectedBill.ID).css("display", "none");
}


$( document ).ready(function() {
	$('#payit').on('click', function () {
		$('#popup').css("display", "none");
		$('#apptext').removeClass("text-warning");
		$('#apptext').addClass("text-success");
		$('#appoutline').removeClass("card card-outline-warning");
		$('#appoutline').addClass("card card-outline-success");
		$('#appalert').removeClass("alert alert-warning");
		$('#appalert').addClass("alert alert-success");
		$('#warning').css("display", "none");
		$('#success').css("display", "block");
	})
});

function goto(index){
		if(duegoto){
		localStorage.selectedBill = JSON.stringify(index);
		document.location.href = ("bill_view.html");
		}
		duegoto = true;
	}

function alloff(){
	$('#soon').css("display", "none");
	$('#late').css("display", "none");
	
	$('#alpha').css("display", "none");
	$('#antialpha').css("display", "none");
	
	$('#cat').css("display", "none");
	$('#anticat').css("display", "none");

	$('#important').css("display", "none");
	$('#notimportant').css("display", "none");
}

function selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, state){
	
	alloff()
	
	if(state == 0){
		if(alphBntClk){
		$('#antialpha').css("display", "block");
		}
		else{
	$('#alpha').css("display", "block");
			}
	}
	if(state == 1){
		if(numBtnClk){
	$('#late').css("display", "block");
	
		}
		else{
	$('#soon').css("display", "block");
			}
	}
	if(state == 2){
		if(catBtnClk){
	$('#anticat').css("display", "block");
		}
		else{
	$('#cat').css("display", "block");
			}
	}
	if(state == 3){
		if(priorBtnClk){
	$('#notimportant').css("display", "block");
		}
		else{
	$('#important').css("display", "block");
			}
	}
}

var email = $('#inputEmail').val();

function refreshCards() {
	document.getElementById('card-container').innerHTML = '';
		for(index = 0; index < billArray.length; index++){
		recreate(billArray[index]);		
		}
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send( null );
    return xmlHttp.response;
}
