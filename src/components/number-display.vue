<script>
import BallComponent from "./ball-component.vue";

export default {
  props: ["numbers"],
  components: {
    BallComponent,
  },
};
</script>

<template>
  <div class="shelf">
    <span v-for="number in numbers" :key="number">
      <BallComponent :number="number" class="ball"></BallComponent>
    </span>
  </div>
</template>

<style>
.ball {
  margin: 10px;
}
</style>
