/**
 * We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data
 */

// Data from a web service
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

// Create player arrays
const players1 = game.players[0];
const players2 = game.players[1];

// Extract goalkeeper and field players for Bayern Munich
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// Create array of all players
const allPlayers = [...players1, ...players2];

// Create array of Bayern Munich players with substitutes
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Extract odds
const { team1, draw, team2 } = game.odds;

// Function to print goals
function printGoals(...players) {
  console.log(`Goals scored: ${players.length}`);
  for (const player of players) {
    console.log(player);
  }
}

// Print goals for some players
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.score);

// Determine the more likely winner
console.log(
  `The more likely winner is: ${team1 < team2 ? game.teams[0] : game.teams[1]}`
);
