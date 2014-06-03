function Round(p1, p2) {
	this.p1 = new Player();
	this.p2 = new Player();
	this.trump = '';

	this.trump_round = function(p1, p2, trumpCard) {
		if (p1.deal == true && p2.deal == false) {
			var decision = prompt(p1.name + ', do you want to order or pass?');
			if (decision == 'o') {
				p1.order(p1.hand, trumpCard);
				this.trump = trumpCard.data("suit");
				p1.make = true;
			} else {
				decision = prompt(p2.name + ', Either pass or choose a suit');
				if(decision == 'p') {
					p1.stick_the_dealer;
					p1.make = true;
				} else {
					this.trump = decision;
					p2.make = true;
					alert(p2.name + ' made it trump. Trump is ' + this.trump);
				}
			}
		}
		set_card_values(p1.hand);
		set_card_values(p2.hand);
	}
	function set_card_values(hand, trump) {
		//cycle through each card and change value accordingly

		for(var i = 0; i < hand.length; i++) {
			var suit = hand[i].data('suit');
			var rank = hand[i].data('rank');

			switch(trump) {
			case 'D':
				if (suit == 'D' && rank == 17) {
					suit = 'D';
				} else if (suit == 'D' && rank == 11) {
					rank = 16;
				} else if (suit == 'H'  && rank == 11) {
					rank = 15;
					suit = 'D';
				}
			break;
			case 'H':
				if (suit == 'H' && rank == 17) {
					suit = 'H';
				} else if (suit == 'H' && rank == 11) {
					rank = 16;
				} else if (suit == 'D'  && rank == 11) {
					rank = 15;
					suit = 'H';
				}
			break;
			case 'S':
				if (suit == 'S' && rank == 17) {
					suit = 'S';
				} else if (suit == 'S' && rank == 11) {
					rank = 16;
				} else if (suit == 'C'  && rank == 11) {
					rank = 15;
					suit = 'S';
				}
			break;
			case 'C':
				if (suit == 'C' && rank == 17) {
					suit = 'C';
				} else if (suit == 'C' && rank == 11) {
					rank = 16;
				} else if (suit == 'S'  && rank == 11) {
					rank = 15;
					suit = 'C';
				}
			break;
		}


		}
		
	}
	function play_for_trick() {

		
	}
}