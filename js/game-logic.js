// All code should be written in this file.
//Player 1 Move # Type
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType
//Player 1 Move # Value
let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue
//Player 2 Move # Type
let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType
//Player 2 Move # Value
let playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue
//Wins
let playerOneWins
let playerTwoWins

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return
    }

    if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)){
        return 
    }

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)){
        return
    }

    if((moveOneValue + moveTwoValue + moveThreeValue ) > 99){
        return
    }

    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function isValidMoveType(moveType){
    return (moveType === 'rock' || moveType === 'paper' || moveType === 'scissors')
}

function isValidMoveValue(moveValue){
    return (moveValue >= 1 ) && ( moveValue <= 99)
}

function getRoundWinner (roundNumber){
    switch (roundNumber){
        case 1:
            return getMoveWinner(playerOneMoveOneType,playerOneMoveOneValue,playerTwoMoveOneType,playerTwoMoveOneValue);
        
        case 2:
            return getMoveWinner(playerOneMoveTwoType,playerOneMoveTwoValue,playerTwoMoveTwoType,playerTwoMoveTwoValue);

        case 3:
            return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,playerTwoMoveThreeType,playerTwoMoveThreeValue);

        default:
            return null
    }
    // if (roundNumber === 1){
    //     return getMoveWinner(playerOneMoveOneType,playerOneMoveOneValue,playerTwoMoveOneType,playerTwoMoveOneValue)
    // } else if (roundNumber === 2){
    //     return getMoveWinner(playerOneMoveTwoType,playerOneMoveTwoValue,playerTwoMoveTwoType,playerTwoMoveTwoValue)
    // } else if (roundNumber === 3){
    //     return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,playerTwoMoveTwoThree,playerTwoMoveThreeValue)
    // } else {
    //     return null
    //}
}

function getMoveWinner (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue){
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue){
        return null
    } else if(playerOneMoveType === 'rock' && playerTwoMoveType === 'paper'){
        return "Player Two"
    } else if (playerOneMoveType === 'rock' && playerTwoMoveType === 'scissors'){
        return "Player One"
    } else if(playerOneMoveType === 'paper' && playerTwoMoveType === 'rock'){
        return "Player One"
    }else if (playerOneMoveType === 'paper' && playerTwoMoveType === 'scissors'){
        return "Player Two"
    } else if(playerOneMoveType === 'scissors' && playerTwoMoveType === 'rock'){
        return "Player Two"
    } else if(playerOneMoveType === 'scissors' && playerTwoMoveType === 'paper'){
        return "Player One"
    } else if (playerOneMoveType === playerTwoMoveType){
        // Tie
        if(playerOneMoveValue > playerTwoMoveValue){
            return "Player One"
        } else if (playerOneMoveValue < playerTwoMoveValue){
            return "Player Two"
        } else {
            return "Tie"
        }
    }

}
function getGameWinner (){
    if(!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveTwoType ||!playerTwoMoveThreeType || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
        return null
    }

    playerOneWins = 0
    playerTwoWins = 0

    const roundOneWinner = getRoundWinner(1)
    const roundTwoWinner = getRoundWinner(2)
    const roundThreeWinner = getRoundWinner(3)

    addWin(roundOneWinner)
    addWin(roundTwoWinner)
    addWin(roundThreeWinner)

    if (playerOneWins > playerTwoWins){
        return "Player One"
    } else if (playerOneWins < playerTwoWins){
        return "Player Two"
    } else {
        return "Tie"
    }
}

function addWin (winner){
    if (winner === "Player One"){
        playerOneWins = (playerOneWins + 1)
    } else if (winner === "Player Two"){
        playerTwoWins = (playerTwoWins + 1)
    }
}

function setComputerMoves (){
    const moves = ['rock','paper','scissors']
    const moveOneType = moves[Math.floor(Math.random() * 3)]
    const moveTwoType = moves[Math.floor(Math.random() * 3)]
    const moveThreeType = moves[Math.floor(Math.random() * 3)]

    const moveOneValue = Math.floor(Math.random() * 96) +1
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) +1
    const moveThreeValue = 99 - moveOneValue - moveTwoValue

    setPlayerMoves ("Player Two", moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType,moveThreeValue)

}