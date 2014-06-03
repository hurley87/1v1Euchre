function Player(name) {
	this.name = name;
	this.hand  = [];
	this.make = false;
	this.deal = false;
	this.score = 0;

	this.order = function(hand, trumpCard) {
		this.make = true;
		hand.on('click', '.card', function() {
			$(this).fadeOut(1000); //take card out of hand
			hand.append(trumpCard); //put new card in hand
			trumpCard.fadeOut(100).fadeIn(1000); //animate new card going into players hand	
			hand.off('click');
		});		
	}
	this.lead = function(hand, card) {
		//pick any card in hand
		$('#playArea').append(this);
		$(this).fadeOut(100).fadeIn(1000);	
		hand.off('click');

	}		
	this.respond = function(hand, leadCard) {
		//must follow suit here
		//automatically play card if it has the last suit
		$('#playArea').append(this);
		$(this).fadeOut(100).fadeIn(1000);	
		hand.off('click');
	}
	this.makeTrump = function() {
		//buttons for suits appear, player chooses one suit
		this.make = true;
		//maybe in the round Class i make buttons with suit data...
	}	
 		
}

