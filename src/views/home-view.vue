<script>
import NumberDisplay from "../components/number-display.vue";
import NumberPicker from "../components/number-picker.vue";
import { GenerateGame } from "../modules/Game";
import { store } from "../store/store.js";

export default {
  data() {
    return {
      store,
      numbers: [15],
      ballCount: 2,
      playerCount: null,
    };
  },
  components: {
    NumberDisplay,
    NumberPicker,
  },
  methods: {
    play() {
      if (this.ballCount && this.playerCount) {
        this.store.playerCards = GenerateGame(this.playerCount, this.ballCount);
        this.$router.push("play");
      }
    },
  },
  computed: {
    maxBallCount() {
      return Math.min(Math.floor(15 / this.playerCount), 4);
    },
  },
};
</script>
<template>
  <!DOCTYPE html>
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </head>
    <body>
      <h1>Kelly Ball 🎱</h1>

      <input type="hidden" name="players" :value="playerCount" />
      <input type="hidden" name="balls" :value="ballCount" />
      <NumberPicker
        item-name="How many players?"
        :min="2"
        :max="4"
        @select="(picked) => (playerCount = picked)"
      ></NumberPicker>
      <NumberPicker
        item-name="How many balls?"
        :min="1"
        :max="maxBallCount"
        @select="(picked) => (ballCount = picked)"
        :start-selected="ballCount"
      ></NumberPicker>
      <!-- <NumberDisplay :numbers="numbers"></NumberDisplay> -->
      <h2>Rules</h2>
      <p>
        <list>
          <li>
            Players will get <mark>{{ ballCount || 2 }}</mark> balls.
          </li>
          <li>Don't reveal your balls.</li>
          <li>If all your balls are sunk, you lose.</li>
          <li>Last player left wins.</li>
        </list>
      </p>
      <button @click="play" class="play-button">Play</button>
    </body>
  </html>
</template>

<style>
body {
  display: block;
  align-items: center;
  text-align: center;
  height: max-content;
}

li {
  list-style: none;
}

.play-button {
  display: block;
  margin: 2rem auto;
  padding: 0.6rem 1.2rem;
  width: fit-content;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

mark {
  background: none;
  font-weight: bold;
  color: blue;
}
</style>
