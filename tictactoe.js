$(document).ready(function() {

	var turn = 0;
	var player = "X";

	$("td").on('click', function(){
		if (turn % 2 == 0) {
			$(this).css('background-color', '#CCCCFF');
			$(this).html("X");
			player = "X";
		} else{
			$(this).css('background-color', '#CC99FF');
			$(this).html("O");
			player = "O";
		}
		checkForWinner(player);
		$(this).off('click');
		turn++;
	});

	function checkForWinner(player){
		var arrayWinning = [[1,2,3], [4,5,6], [7,8,9], [1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
		for (var i = 0; i < arrayWinning.length - 1; i++) {
			combo = arrayWinning[i];
			if ($('#' + combo[0]).text() == player && $('#' + combo[1]).text() == player && $('#' + combo[2]).text() == player) {
				alert(player + ' wins!');
			}
		}

		// first, i need to loop through the winning combinations
		// then, check each winning combo by comparing it to the corresponding ID's in the table (TD's)

	}



});