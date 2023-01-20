<script>
import BallComponent from "./ball-component.vue";

export default {
  props: ["numbers"],
  data() {
    return {
      button: 0,
    };
  },
  methods: {
    doNothing() {
      this.button += 1;
    },
  },
  components: {
    BallComponent,
  },
};
</script>

<template>
  <div class="shelf">
    <p>{{ button }}</p>
    <span v-for="number in numbers" :key="number">
      <BallComponent
        @click="doNothing"
        :number="number"
        class="ball grow"
      ></BallComponent>
    </span>
  </div>
</template>

<style>
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
  margin: 10px;
  animation: wiggle 2.5s infinite;
}

.shelf {
  display: flex;
}
</style>
