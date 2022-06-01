function showMenu() {
	$(this).addClass('active');
}

function removeMenu() {
	if($('.menu-mobile').hasClass('active')){
		$('.menu-mobile').toggleClass('active');
		$('.header__burger').toggleClass('active');
	}
}

$(document).ready(function (){
	$('.header__burger').click(function(event) {
        $('.menu-mobile').toggleClass('active');
		$('.header__burger').toggleClass('active');
		$('html').toggleClass('lock');
    });
	$('.menu-mobile__link').click(function(){
		removeMenu();
	})
});