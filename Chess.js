var wB = "&#9815;"
var wR = "&#9814;"
var wH = "&#9816;"
var wQ = "&#9813;"
var wK = "&#9812;"
var wP = "&#9817;"

var bB = "&#9821;"
var bR = "&#9820;"
var bH = "&#9822;"
var bQ = "&#9819;"
var bK = "&#9818;"
var bP = "&#9823;"

var game
var gameAnswer
var gameComp
var easyPieceLocations = [['a8.' + wB, 'h8.' + bK, 'a7.' + bP, 'h7.' + bP, 'b6.' + bP, 'd6.' + wP, 'e6.' + wQ, 'c5.' + bP, 'e5.' + bB, 'h4.' + wP, 'b3.' + wP, 'g3.' + bQ, 'a2.' + wP, 'f1.' + wR, 'h1.' + wK ], 
['b8.' + bK, 'a7.' + wR, 'b7.' + wH, 'c7.' + bB, 'a6.' + wK, 'c6.' + wR]]
var easyAnswer = [['f1f8', 'f8g8'], ['b7c5', 'c5d7']]
var easyCompMove = [['h8g7'], ['c7f4']]

var mediumPieceLocations = [['c8.'+ bK, 'd8.' + bR, 'f8.' + bR, 'a7.' + bP, 'e7.' + wR,
'f7.' + wQ, 'b6.' + bP, 'd6.' + bP, 'h6.' + bP, 'c3.' + wP, 'a2.' + wP, 'b2.' + wP, 'f2.' + wP,
'g2.' + wP, 'h2.' + wP, 'a1.' + wR, 'b1.' + wH, 'g1.'+ wK]]
var mediumAnswer = [['f7c4', 'c4c7', 'c7b7']]
var mediumCompMove = [['c8b8', 'b8a8']]

var hardPieceLocations = [['f8.' + bR, 'g8.' + bK, 'd7.' + bB, 'f7.' + bP, 'g7.' + bP,
'h7.' + bP, 'a5.' + bP, 'b5.' + bQ, 'd5.' + wH, 'b4.' + bP, 'g4.' + wP, 'c3.' + wP, 'd3.' + wQ,
'f3.' + wP, 'a2.' + wP, 'b2.' + wP, 'b1.' + wK, 'e1.' + wR]]
var hardAnswer = [['d5e7', 'd3h7', 'e1h1', 'h1h5']]
var hardCompMove = [['g8h8', 'h8h7', 'b5h5']]

var rand
var moveNumber = 0

function reset()
{
    locations = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    locations2 = ['1', '2', '3', '4', '5', '6', '7', '8']
    for (i = 0; i < 8; i++)
    {
        for(j = 0; j < 8; j++)
        {
            temp = locations[i] + locations2[j]
            document.getElementById(temp).innerHTML = ''
        }
    }
}

function howTo()
{
    document.getElementById("how To").innerHTML = "The rules of the game are as follows. You are white, and have a specific number of moves to win the game. You have three chances to do the wrong move. After three wrong moves, you lose and must try a different game. Each game is winnable within the specified number of moves. To move, hit the move button and enter your move in the format of the starting position of the pice you wish to move followed immediately be the ending position of that piece, for example, if you want to move a piece from a1 to c3, you would enter a1c3. That is all, enjoy the game."
}

function runEasy()
{
    rand = Math.floor(Math.random() * easyPieceLocations.length)
    game = easyPieceLocations[rand]
    gameAnswer = easyAnswer[rand]
    gameComp = easyCompMove[rand]
    elementID = ""
    piece = ""
    temp = ""
    document.getElementById("movesRemaining").innerHTML = "You have " + String(gameAnswer.length - moveNumber) + " move(s) remaining"
    for (i = 0; i < game.length; i++)
    {
        temp = game[i].split(".")
        elementID = temp[0]
        piece = temp[1]
        document.getElementById(elementID).innerHTML = piece
        
        document.getElementById(elementID).fontSize = 9
    }
}

function runMedium()
{
    rand = Math.floor(Math.random() * mediumPieceLocations.length)
    game = mediumPieceLocations[rand]
    gameAnswer = mediumAnswer[rand]
    gameComp = mediumCompMove[rand]
    elementID = ""
    piece = ""
    temp = ""
    document.getElementById("movesRemaining").innerHTML = "You have " + String(gameAnswer.length - moveNumber) + " move(s) remaining"
    for (i = 0; i < game.length; i++)
    {
        temp = game[i].split(".")
        elementID = temp[0]
        piece = temp[1]
        document.getElementById(elementID).innerHTML = piece
        
        document.getElementById(elementID).fontSize = 9
    }
}

function runHard()
{
    rand = Math.floor(Math.random() * hardPieceLocations.length)
    game = hardPieceLocations[rand]
    gameAnswer = hardAnswer[rand]
    gameComp = hardCompMove[rand]
    elementID = ""
    piece = ""
    temp = ""
    document.getElementById("movesRemaining").innerHTML = "You have " + String(gameAnswer.length - moveNumber) + " move(s) remaining"
    for (i = 0; i < game.length; i++)
    {
        temp = game[i].split(".")
        elementID = temp[0]
        piece = temp[1]
        document.getElementById(elementID).innerHTML = piece
        
        document.getElementById(elementID).fontSize = 9
    }
}

function moveTurn()
{
    answer = prompt()
    if (answer == gameAnswer[moveNumber])
    {
        doMove(gameAnswer[moveNumber])
        if (moveNumber < gameComp.length)
        {
            doCompMove(gameComp[moveNumber])
        }
        moveNumber = moveNumber + 1
        document.getElementById("movesRemaining").innerHTML = "You have " + String(gameAnswer.length - moveNumber) + " move(s) remaining"
    }
    else
    {
        document.getElementById("correct").innerHTML = "Incorrect Move, try again"
    }
    if (moveNumber == gameAnswer.length)
    {
        document.getElementById("correct").innerHTML = "Congrats, you won"
    }
}

function doMove(turn)
{
    move = turn
    start = move.substring(0,2);
    end = move.substring(2);
    piece = document.getElementById(start).innerHTML;
    document.getElementById(start).innerHTML = "";
    document.getElementById(end).innerHTML = piece;
    
}

function doCompMove(turn)
{
    move = turn
    start = move.substring(0,2);
    end = move.substring(2);
    piece = document.getElementById(start).innerHTML;
    document.getElementById(start).innerHTML = "";
    document.getElementById(end).innerHTML = piece;
    //document.getElementById('b1').innerHTML = 'ASDFASDFASDFADSFDSAFADSSAF'
}
