function showMenu() {
	$(this).addClass('active');
}

$(document).ready(function (){
	$('.header__burger').click(function(event) {
        $('.menu-mobile').toggleClass('active');
		$('.header__burger').toggleClass('active');
		$('html').toggleClass('lock');
    });
});