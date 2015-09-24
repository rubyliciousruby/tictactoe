$(document).ready(function() {

	var turn = 1;
	var player = "X";
	var gameOver = false;

	function gameBegin(){
		$("td").on('click', function (){
			if (turn % 2 == 0) {
				$(this).css('background-color', '#CCCCFF');
				$(this).html("X");
				player = "X";
			} else{
				$(this).css('background-color', '#CC99FF');
				$(this).html("O");
				player = "O";
			}
			//if checkForWinner is true, alert player is a winner.
			//else if the turn = 9, then alert that no one wins the game.
			checkForWinner(player);
			console.log(turn);
			if (turn === 9 && gameOver === false) {
				alert('No one wins game! Please play again!')
				resetGame();
			}

			$(this).off('click');
			turn++;
		});
	}

	gameBegin();

	function checkForWinner(player){
		
		var arrayWinning = [[1,2,3], [4,5,6], [7,8,9], [1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
		for (var i = 0; i < arrayWinning.length - 1; i++) {
			combo = arrayWinning[i];
			if ($('#' + combo[0]).text() == player && $('#' + combo[1]).text() == player && $('#' + combo[2]).text() == player) {
				alert(player + ' wins!');	
				gameOver = true;
				$("td").off('click');
				resetGame();
				//return true;
			}
		}
		// first, i need to loop through the winning combinations
		// then, check each winning combo by comparing it to the corresponding ID's in the table (TD's)

	} 

	function resetGame() {
		$('td').html('');
		$('td').off('click');
		$('td').css('background-color','');
		$('td').on('click', gameBegin());

	}

});
		// if winner == true) {
		// 	alert(player + 'wins!');

		// } else {
		// 	alert('No one wins the game!');

		// }
//the alert will come out before the winner finish clicking on the last piece of the puzzle.
//need a reset button to reset to the initial state for the game.the grids in Safari. the content of the table appeared to be blank in Safari.
//stable the size of the td tag, it seems to stretch in size when it is on click mode.
//stop player from clicking after a winner state has been achieved.