<script>
import NumberDisplay from "./components/number-display.vue";

export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
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
      <h1>hello</h1>
      <p>This website is for kellyball</p>
      <NumberDisplay :numbers="numbers"></NumberDisplay>
    </body>
  </html>
</template>

<style>
body {
  background-color: rgb(77, 88, 98);
}
</style>
