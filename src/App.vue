<script>
import NumberDisplay from "./components/number-display.vue";

export default {
  data() {
    return {
      numbers: [12, 6, 10],
    };
  },
  components: {
    NumberDisplay,
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
      <h2>Players</h2>
      <h2>Balls</h2>
      <NumberDisplay :numbers="numbers"></NumberDisplay>
      <NumberDisplay :numbers="numbers"></NumberDisplay>
      <NumberDisplay :numbers="numbers"></NumberDisplay>
      <h2>Rules</h2>
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
      </footer>
    </body>
  </html>
</template>

<style>
body {
  background-color: rgb(255, 255, 255);
  align-items: center;
}
</style>
