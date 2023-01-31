<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    hide() {
      this.isHidden = !this.isHidden;

      if (this.isHidden == false) {
        setTimeout(() => (this.isHidden = true), 3000);
      }
    },
  },
};
</script>

<template>
  <div>
    <div @click="hide" :class="{ hidden: isHidden }" class="player-card">
      <div class="player-card-title"></div>
      <div class="player-card-ball-display">
        <slot />
      </div>
    </div>
    <span style="z-index: 10"></span>
  </div>
</template>

<style scoped>
.player-card {
  background-color: lightgray;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  transition: all 0.3s ease-in-out;
}

.hidden {
  filter: saturate(0) contrast(0);
}
</style>
