<script>
import NumberDisplay from "../components/number-display.vue";
import NumberPicker from "../components/number-picker.vue";

export default {
  data() {
    return {
      numbers: [15],
      ballCount: null,
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
        this.$router.push("play");
      }
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
        :min="1"
        :max="4"
        @select="(picked) => (playerCount = picked)"
      ></NumberPicker>
      <NumberPicker
        item-name="How many balls?"
        :min="1"
        :max="6"
        @select="(picked) => (ballCount = picked)"
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
}

li {
  list-style: none;
}

.play-button {
  padding: 10px;
  width: 60px;
}

mark {
  background: none;
  font-weight: bold;
  color: blue;
}
</style>
