$( document ).ready(function() {

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

$( document ).ready(function() {
	var alphBntClk = false;
	var numBtnClk = false;
	var catBtnClk = false;
	var priorBtnClk = true;
	var $divs = $("div.container");

		var priorityOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("priority").text() < $(b).find("priority").text();
		});
		$("#card-container").html(priorityOrderedDivs);
		
	$('#alphBnt').on('click', function () {
		if(!alphBntClk){	
		var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("name").text() > $(b).find("name").text();
		});
		$("#card-container").html(alphabeticallyOrderedDivs);
		}
		
		else{
		var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("name").text() < $(b).find("name").text();
		});
		$("#card-container").html(alphabeticallyOrderedDivs);
		}
		
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 0);
		alphBntClk = !alphBntClk;
	});
	
	$('#numBnt').on('click', function () {
		if(!numBtnClk){
		var numericallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("date").text() < $(b).find("date").text();
		});
		$("#card-container").html(numericallyOrderedDivs);
		}
		
		else{
		var numericallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("date").text() > $(b).find("date").text();
		});
		$("#card-container").html(numericallyOrderedDivs);
		}
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 1);
		numBtnClk = !numBtnClk;	
});

	$('#catBnt').on('click', function () {
		if(!catBtnClk){	
		var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("category").text() > $(b).find("category").text();
		});
		$("#card-container").html(alphabeticallyOrderedDivs);
		}
		
		else{
		var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("category").text() < $(b).find("category").text();
		});
		$("#card-container").html(alphabeticallyOrderedDivs);
		}
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 2);
		catBtnClk = !catBtnClk;
});	
	
	$('#priorBnt').on('click', function () {
		if(!priorBtnClk){
		var priorityOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("priority").text() < $(b).find("priority").text();
		});
		$("#card-container").html(priorityOrderedDivs);
		}
		
		else{
		var priorityOrderedDivs = $divs.sort(function (a, b) {
			return $(a).find("priority").text() > $(b).find("priority").text();
		});
		$("#card-container").html(priorityOrderedDivs);
		}
		selected(alphBntClk,numBtnClk,catBtnClk,priorBtnClk, 3);
		priorBtnClk = !priorBtnClk;	
});
});

var duegoto = true;

function HideCard(card) {
	duegoto = false;
	$(card).css("display", "none");
}

function PayCard(card) {
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
	$('#popup').css("display", "block");
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

$( document ).ready(function() {
	$('#closeit').on('click', function () {
		$('#popup').css("display", "none");
	})
});


function goto(link){
		if(duegoto){	
		document.location.href = (link);
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