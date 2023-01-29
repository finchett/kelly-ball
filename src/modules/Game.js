import PlayerCard from "../models/PlayerCard";
import { range } from "pythonic";
import { shuffle } from "./Shuffle.js";

export function GenerateGame(playerCount, ballCount) {
  let balls = shuffle(Array.from(range(1, 16)));

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
  return playerCards;
}
