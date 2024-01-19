let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
};
const compareGuesses = (user, computer, target) => {
    const userDifference = Math.abs(target - user);
    const computerDifference = Math.abs(target - computer);

    if (
        userDifference < computerDifference ||
        userDifference === computerDifference
    ) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    } else {
        return "Error: updateScore() must recieve human or computer";
    }
};

const advanceRound = () => {
    currentRoundNumber++
}
