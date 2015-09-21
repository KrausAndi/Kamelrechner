$(document).ready(function(){
	//language selection
	$('.speakenglish').on('click', function(){
		$('.engl, .ger').toggleClass('hidden');
	})
	var hisage;
	var hisheight
	var agepoints;
	var value;
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
		//Validierung

		//end Validierung
		var sum = [];
		var sumit;
		var txtit;
		var total = 0;

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
		
			var t=0;
			function next() {
					setTimeout(function() {
			            if (t == total + 1) {
			                return;
			            }

			            // Do what you need to do 
			            $('.camelcount').text(t);
			            t++;
			            
			            next();
			        }, 50);

			}	
			next();
	})
})

$(document).on("click", ".retry", function(){
          location.reload(true);
});
