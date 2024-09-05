const game = {
  teams: ["Bayern Munich", "Borrusia Dortmund"],
  players: [
    [
      "Neuer",
      "Pavard",
      "Süle",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Müller",
      "Gnabry",
      "Lewandowski",
      "Coman",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Witsel",
      "Dahoud",
      "Brandt",
      "Sancho",
      "Haland",
      "Guerreiro",
    ],
  ],
  score: "4:0",
  odds: { team1: 1.33, draw: 3.25, team2: 6.5 },
};

// Loop over the game.score array and print each player name to the console, along with the goal number
for (let i = 0; i < game.score.length; i++) {
  console.log(`Goal ${i + 1}: ${game.score[i]}`);
}

// Calculate the average odd and log it to the console
const oddsValues = Object.values(game.odds);
const averageOdd =
  oddsValues.reduce((sum, odd) => sum + odd, 0) / oddsValues.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// Print the 3 odds to the console
console.log(`Odd of victory ${game.teams[0]}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.teams[1]}: ${game.odds.team2}`);

// Create an object called 'scorers'
const scorers = {};
for (const player of game.score) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}
console.log(scorers);
