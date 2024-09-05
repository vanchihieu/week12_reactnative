/**
 * Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
 */

// Game events
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🟨 Yellow card"],
  [64, "🟨 Yellow card"],
  [69, "🔁 Substitution"],
  [70, "🟥 Red card"],
  [80, "⚽ GOAL"],
  [90, "⏱ End of regular time"],
  [93, "⚽ GOAL"],
  [96, "⏱ End of match"],
]);

// Create an array of unique events
const events = [...new Set(gameEvents.values())];
console.log(events);

// Remove the unfair yellow card
gameEvents.delete(64);

// Calculate average time between events
const averageTimeBetweenEvents = 90 / gameEvents.size;
console.log(
  `An event happened, on average, every ${averageTimeBetweenEvents.toFixed(
    0
  )} minutes`
);

// Log game events with half information
for (const [minute, event] of gameEvents) {
  console.log(
    `${minute < 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${minute}: ${event}`
  );
}
