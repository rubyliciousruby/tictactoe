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
			$(this).off('click');
			turn++;
			checkForWinner(player);
			console.log(turn);
			if (turn === 9 && gameOver === false) {
				alert('No one wins game! Please play again!')
				resetGame();
			}

			
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
				resetGame();
			
			}
		}

	} 

	function resetGame() {
		$('td').html('');
		$('td').off('click');
		$('td').css('background-color','');
		$('td').on('click', gameBegin());
		gameOver = false;
		turn = 0;
	}

});

