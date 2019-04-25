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
var easyPieceLocations = [['a8.' + wB, 'h8.' + bK, 'a7.' + bP, 'h7.' + bP, 'b6.' + bP, 'd6.' + wP, 'e6.' + wQ, 'c5.' + bP, 'e5.' + bB, 'h4.' + wP, 'b3.' + wP, 'g3.' + bQ, 'a2.' + wP, 'f1.' + wR, 'h1.' + wK ]]
var easyAnswer = [['f1f8', 'f8g8']]
var easyCompMove = [['h8g7']]
var rand
var moveNumber = 0
function run()
{
    rand = Math.floor(Math.random() * easyPieceLocations.length)
    game = easyPieceLocations[rand]
    gameAnswer = easyAnswer[rand]
    gameComp = easyCompMove[rand]
    elementID = ""
    piece = ""
    temp = ""
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
        if (moveNumber <= gameComp.length)
        {
            doCompMove(gameComp[moveNumber])
        }
        moveNumber = moveNumber + 1
    }
    else
    {
        moveNumber = moveNumber
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
