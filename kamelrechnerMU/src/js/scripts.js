//document ready
$(document).ready(function(){
	/**** Variables ****/

	var hisage;
	var hisheight
	var agepoints;
	var value;
	var t=0;
	

	/**** end Variables ****/

	// get ranges
	$('.agerange').on('change', function(){

		hisage = $(this).val();
		$('.ageval').text(hisage);
	})
	$('.heightrange').on('change', function(){
		hisheight = $(this).val();
		$('.heightval').text(hisheight);
	})
	$('input[type=range]').on('input', function () {
    $(this).trigger('change');
	});
	//end get ranges

	
	//chose element on page
	$('.cli').on('click', function(){
		$(this).siblings('.cli').removeClass('active');
		$(this).addClass('active');
		return false;
	})

	$(".dropdown-menu").find('.sum').click(function() {
         value = $(this).parent('li').data('value');
    });
	//end chose element on page

	//calculate and display camels
	$('.sumup').on('click', function(){
		var sum = [];
		var sumit;
		var txtit;
		var total = 0;

		//Validierung
		var countEntrys = validateEntrys();
		
		if(countEntrys<6){
			$(".validate-popup").removeClass('validatehidden');
		}
		else{
		
			if(hisage>40){
				agepoints = 5;
			}else if(hisage>30){
				agepoints = 15;
			}
			else if(hisage>20){
				agepoints = 20;
			}else {
				agepoints = 25;
			}
			//agepoints
			sum.push(hisheight/9, agepoints, value);
			
			$('.active').each(function(){
				
				sumit = $(this).data('value');
				
				sum.push(sumit);
				

			})

			$('.hidethis').addClass('hidden');
			$('.showthis').removeClass('hidden');

			var zws = [];
			for(var i=0;i<sum.length;i++){
				 zws.push(parseInt(sum[i]));
				}
			
			for(var i=0;i<zws.length;i++){
				total += zws[i]<< 0;
			}
			
				
			nextCamel(t, total);
		}
			
	})

})
//end document ready

/***********************
******* Methoden *******
***********************/

//Count up camels//
function nextCamel(t, total) {
	setTimeout(function() {
        if (t == total + 1) {
            return;
        }
        $('.camelcount').text(t);
        t++;
        nextCamel(t, total);
    }, 50);
}
//end Count up camels//
//validate
function validateEntrys(){
	var countEntrys = 0;

	$('.active').each(function(){
		countEntrys++;
	})
	
	return countEntrys;
}
$(document).on("click", ".abort", function(){
          $(".validate-popup").addClass('validatehidden');

});
//validate


/****** end Methoden *******/

//retry-button 
$(document).on("click", ".retry", function(){
          location.reload(true);
});
//end retry-button
//language selection
$('.speakenglish').on('click', function(){
	$('.engl, .ger').toggleClass('langhidden');
})
//end language selection
//dropdown to button
$('div.btn-group ul.dropdown-menu li a').click(function (e) {
    var $div = $(this).parent().parent().parent(); 
    var $btn = $div.find('.haircolor');
    $btn.html($(this).text());
    $div.removeClass('open');
    e.preventDefault();
    return false;
});
//end dropdown to button
