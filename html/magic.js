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
	});
});

$('.contact-name').hide();
$('#search').click(function(){
    $('.contact-name').hide();
    var txt = $('#search-criteria').val();
    $('.contact-name').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});

$( document ).ready(function() {
	var alphBntClk = false;
	var numBtnClk = false;
	var catBtnClk = false;

	var $divs = $("div.container");
	
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
		catBtnClk = !catBtnClk;
	});	
});

function HideCard(card) {
	$(card).css("display", "none");
}