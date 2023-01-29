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
};
</script>

<template>
  <div>
    <div
      @click="
        {
          {
            isHidden = !isHidden;
          }
        }
      "
      :class="{ hidden: isHidden }"
      class="player-card"
    >
      <div class="player-card-title"></div>
      <div class="player-card-ball-display">
        <slot />
      </div>
    </div>
    <span style="z-index: 10">Click to toggle</span>
  </div>
</template>

<style>
.player-card {
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.hidden {
  filter: contrast(0);
}
</style>
