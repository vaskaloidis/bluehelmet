$('.btn_open_woodburyflea').click(function () {
	console.log("We detected the click")
	// Send the src on click of button to the iframe. Which will make it load.
	$(".modal_content").find('iframe').attr("src", "http://vkaloidis.herokuapp.com/p/raw/woodburyflea");
	$('.modal').modal({show: true});
	// Hide the loading message
	$(".modal_content").find('iframe').load(function () {
		$('.loading').hide();
	});
})