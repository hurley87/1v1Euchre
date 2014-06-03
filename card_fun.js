

$(document).ready(function(){

	$('#hand2').fadeOut(10).fadeIn(3000);
	$('#hand1').fadeOut(10).fadeIn(3000);
	createGrid.init();
	$('.row').children('.card').hide(10);

	
	var p1 = new Player('dave');
	var p2 = new Player('mom');
	var new_deal = new Deck();
	$("#deal").on('click', function() {
		new_deal.deal();
		$(this).hide(1000);
		$(this).parent().html("<button id='order'>Order</button>");
	});
	
	$('#instructions').on('click', '#order', function() {
		p1.hand = $('#hand1').filter('.card').filter(function(index){
			return index < 5;
		});
		var trumpCard = $('#playArea').find('.card');
		$('#order').hide(1200);
		p1.order(p1.hand, trumpCard);
	});
	



});