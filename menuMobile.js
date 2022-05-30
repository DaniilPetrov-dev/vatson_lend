function showMenu() {
	$(this).addClass('active');
}

$(document).ready(function (){
	$('.header__burger').click(function(event) {
        $('.menu-mobile').toggleClass('active');
    });
});