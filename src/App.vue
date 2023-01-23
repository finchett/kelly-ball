<script>
import NumberDisplay from "./components/number-display.vue";
import NumberPicker from "./components/number-picker.vue";

export default {
  data() {
    return {
      numbers: [12, 6, 10, 11],
      ballCount: 2,
      playerCount: 2,
    };
  },
  components: {
    NumberDisplay,
    NumberPicker,
  },
  methods: {},
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
      <NumberPicker item-name="How many players?"></NumberPicker>
      <NumberPicker
        item-name="How many balls?"
        @select="(picked) => (ballCount = picked)"
      ></NumberPicker>
      <!-- <NumberDisplay :numbers="numbers"></NumberDisplay> -->
      <h2>Rules</h2>
      <p>
        <list>
          <li>
            Players will get <mark>{{ ballCount }}</mark> balls.
          </li>
          <li>Don't reveal your balls.</li>
          <li>If all your balls are sunk, you lose.</li>
          <li>Last player left wins.</li>
        </list>
      </p>

      <button class="play-button">Play</button>
    </body>
  </html>
</template>

<style>
body {
  display: block;
  background-color: rgb(100, 255, 255);
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
