$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.form__button').val('Отправлено');
			$("#form").trigger("reset");
		});
		return false;
	});
	
});