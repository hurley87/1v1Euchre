	/*Create a new grid based on a size parameter*/
	var createGrid = {  
		init: function() {
			
		    this.showHand($('#hand1'));
		    this.showHand($('#hand2'));

		},
		showHand: function(hand) {
		    /*Creates Columns divs (squares) inside each Row div*/
		    for (var j = 0; j < 11; j++)
		    {
		        hand.append('<div class="card"></div>');
		    }
		    
		}	 
	};

	function Card(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	function Deck() {
		this.cards = [];
		var rank = [9, 10, 11, 12, 13, 14];
		var suit = ["C", "D", "H", "S"];

		for (j = 0; j < 6; j++) {
			 for (k = 0; k < 4; k++) {
			 		var myCard = new Card(rank[j], suit[k]);
	    			this.cards.push(myCard);
			 }
	   
		}
		var myCard = new Card(17, "J");
	   	this.cards.push(myCard);
		this.cards.sort(function() { return 0.5 - Math.random() });

		this.deal = function() {
			for(var i = 0; i < this.cards.length - 2; i++) {
				$(".card").eq(i).data("suit", this.cards[i].suit);
				$(".card").eq(i).data("rank", this.cards[i].rank);
				var rank = $(".card").eq(i).data("rank");
				var suit = $(".card").eq(i).data("suit");
				$(".card").eq(i).html("<p>" + rank + suit + "</p>");
				if (suit == 'H' || suit == 'D') {
				$(".card").eq(i).css("backgroundColor","red");	
				}
				
			}
			$('.row').children('.card').show(2000);
		}
	}