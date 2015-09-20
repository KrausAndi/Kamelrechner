$(document).ready(function(){
	$('.speakenglish').on('click', function(){
		$('.engl, .ger').toggleClass('hidden');
		

	})

	$('.agerange').on('change', function(){

		var hisage = $(this).val();
		$('.ageval').text(hisage);
	})
	$('.heightrange').on('change', function(){
		var hisheight = $(this).val();
		$('.heightval').text(hisheight);
	})
	$('input[type=range]').on('input', function () {
    $(this).trigger('change');
	});

	$('div.btn-group ul.dropdown-menu li a').click(function (e) {
    var $div = $(this).parent().parent().parent(); 
    var $btn = $div.find('.haircolor');
    $btn.html($(this).text());
    $div.removeClass('open');
    e.preventDefault();
    return false;
	});
	$('.cli').on('click', function(){
		$(this).siblings('.cli').removeClass('active');
		$(this).addClass('active');
		return false;
	})
	$('.sumup').on('click', function(){

		var sum = [];


		$('.hidethis').addClass('hidden');

	})


})