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
      <BallComponent
        @click="doNothing"
        :number="number"
        class="ball grow"
      ></BallComponent>
    </span>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(10deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.ball {
  margin: 8px;
  animation: wiggle 2.5s infinite;
}

.shelf {
  display: flex;
  flex-direction: column;
}
</style>
