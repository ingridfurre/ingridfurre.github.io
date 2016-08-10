
$(document).ready(function() {
	var c = $(".w").attr('class').split(' ')[1]
	$($("."+c)[0]).css("color", "#000000");
	//imgsWidth()
	$("#oes").hide();
});

/*$('.content.largec .item img').css('max-height', $(window).height() - 150);
$( window ).resize(function() {
	$('.content.largec .item img').css('max-height', $(window).height() - 150);
});*/

function imgsWidth() {
	var width1 = $($(".show-for-medium-up .w0 li:nth-child(3n+1) img")[0]).width();
	var width2 = $($(".show-for-medium-up .w0 li:nth-child(3n+1)")[0]).width();
	var w = width2 - width1;
	var mr = $($(".show-for-medium-up .w0 li:nth-child(3n-1)")[0]).css("margin-right");
	var v = parseFloat(mr) - w;
	console.log(w, mr, v, v+"px");
	$(".show-for-medium-up .w0 li:nth-child(3n+1)").css("margin-right", v+"px")

	var width1 = $($(".show-for-small-down .w0 li:nth-child(3n+1) img")[0]).width();
	var width2 = $($(".show-for-small-down .w0 li:nth-child(3n+1)")[0]).width();
	var w = width2 - width1;
	var mr = $($(".show-for-small-down .w0 li:nth-child(3n-1)")[0]).css("margin-right");
	var v = parseFloat(mr) - w;
	console.log(w, mr, v, v+"px");
	$(".show-for-small-down .w0 li:nth-child(3n+1)").css("margin-right", v+"px")
	/*$('.w0 li img').each(function() {
		var w = $(this).width();
		var pw = $(this).parent().parent().width();
		if (w > pw) {
			$(this).css("width", pw);
		} else if (w < pw && pw <= 180) {
			$(this).css("width", pw);
		} else if (pw >= 180) {
			$(this).css("width", 180);
		}
		var h = $(this).height();
		if (h >= 140) {
			$(this).css("width", "auto");
			$(this).css("height", "auto");
		}
	})*/
}

//imgsWidth()

$( window ).resize(function() {
	//imgsWidth()
});

$(window).load(function() {
	//imgsWidth()
})
