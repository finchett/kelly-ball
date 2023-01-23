<script>
import NumberDisplay from "./components/number-display.vue";
import NumberPicker from "./components/number-picker.vue";

export default {
  data() {
    return {
      numbers: [12, 6, 10],
    };
  },
  components: {
    NumberDisplay,
    NumberPicker,
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
      <h1>Kelly Ball</h1>
      <h2>Balls</h2>
      <NumberDisplay :numbers="numbers"></NumberDisplay>
      <NumberPicker item-name="How many players?"></NumberPicker>
      <NumberPicker item-name="How many balls?"></NumberPicker>
      <!-- <h2>Rules</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <footer>
        <p>Author: Sam Finchett</p>
      </footer> -->
    </body>
  </html>
</template>

<style>
body {
  display: block;
  background-color: rgb(100, 255, 255);
  align-items: center;
}
</style>
