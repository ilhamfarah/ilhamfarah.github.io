var currPlayer = true; // currPlayer true == > red. currPlayer false == yellow

var replay;
var gameOver = false;
var board;

var rows = 4;
var columns = 5;

currRowPosition = [3,3,3,3,3]



window.onload = function() {
	setGame();
}

//creating the board in html, and creating the 2D array
function setGame() {
	board = [];

	for (let r = 0; r < rows; r++) {
		let row = [];
		for (let c = 0; c < columns; c++) {

			row.push(' ');



			let tile = document.createElement ("div");
			tile.id = r.toString() + "-" + c.toString();
			tile.classList.add("tile");
			tile.addEventListener("click", setPiece);
			document.getElementById("board").append(tile);

		}
		board.push(row);
	}


}

//putting the color pieces on the board + updates the js board
function setPiece() {

	if (gameOver == true){
		return;
	}

	let boardLocation = this.id.split ("-");
	r = boardLocation[0];
	c = boardLocation[1];


	r = currRowPosition[c]

	let curr = document.getElementById(r.toString() + "-" + c.toString());

		if (currPlayer == false) {
			curr.classList.add("setRed");
			currPlayer = !currPlayer;
			board[r][c] = "playerRed"
			document.getElementById("turn").innerText = "Yellow's turn";


		} else {
			curr.classList.add("setYellow");
			currPlayer = !currPlayer;
			board[r][c] = "playerYellow"
			document.getElementById("turn").innerText = "Red's turn";
		}

	
		r = r-1;
		currRowPosition[c]=r;

		checkWin();
		console.log(board)

} 

function checkWin() {
		//Horizontal
	     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 2; c++){
         
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2]) {
                    setWinner();
                    return;
                }
            }
         }
    }


     //Vertical
    	for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {

            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }


}





// setting the winner and displaying the replay button

function setWinner() {

	console.log("gameOver")
	if (currPlayer == false) {
		winner.innerText = "Yellow Wins"; 
	} 
	else {
		winner.innerText = "Red Wins"; 
	}

	document.getElementById('turn').remove()
	replay = document.getElementById('replay');
	replay.style.display = "inline-block";

	playWinGif();
}






// Function to play the win GIF
function playWinGif() {

	const winGifElement = document.getElementById("win-gif");
	const winGifURL = "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"; 

  winGifElement.src = winGifURL; // Set the GIF source
  winGifElement.style.display = "block"; // Show the GIF

}


//restart the game
function reset() {
	location.reload();
}







