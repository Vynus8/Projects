const team = {
    _players: [{
        firstName: 'George',
        lastName: 'Orewell',
        age: 32
    }, {
        firstName: 'John',
        lastName: 'Smith',
        age: 27
    }, {
        firstName: 'Carl',
        lastName: 'Johansson',
        age: 25
    }],
    _games: [{
        opponent: 'Brazil',
        teamPoints: 10,
        opponentPoints: 10
    }, {
        opponent: 'England',
        teamPoints: 2,
        opponentPoints: 10
    }, {
        opponent: 'Spain',
        teamPoints: 20,
        opponentPoints: 18
    }],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }; this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            newOpponent: newOpponent,
            newTeamPoints: newTeamPoints,
            newOpponentPoints: newOpponentPoints
        }; this._games.push(newGame);
    }
};
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98)
console.log(team.players, team.games)
