import PlayerCard from "../models/PlayerCard";
import { range } from "pythonic";

/**
 * from https://stackoverflow.com/a/6274381
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function GenerateGame(playerCount, ballCount) {
  let balls = shuffle(Array.from(range(1, 16)));

  console.log(balls);

  let playerCards = [];

  let i = 0;
  while (i < playerCount) {
    playerCards.push(
      new PlayerCard(
        `Player ${i + 1}`,
        balls.slice(i * ballCount, (i + 1) * ballCount)
      )
    );

    i++;
  }
  console.log(playerCards);
  return playerCards;
}
