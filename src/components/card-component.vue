<template>
  <div class="card" @click="flipCard">
    <div :class="['card-inner', { flipped }]">
      <div class="card-front" :style="getLightColorFront(this.player)">⇄</div>
      <div class="card-back" :style="getPaperStyle(this.player)">
        <slot></slot>
      </div>
    </div>
    <div v-if="flipped" class="progress-bar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      timeoutId: null,
    };
  },
  methods: {
    flipCard() { 
      this.flipped = !this.flipped;

      if (this.flipped) {
        clearTimeout(this.timeoutId)
      }

      this.timeoutId = setTimeout(() => {
        this.flipped = false;
      }, 3000);

    },
    getLightColorFront(n) {
      const hue = (n * 50 + 310) % 360; // Keep the hue in the 0-360 range

      return {
        background: `linear-gradient(135deg, hsl(${hue}, 100%, 75%), hsl(${hue + 10}, 100%, 72%))` // Normal front
      };
    },
    getPaperStyle(n) {
      const hue = (n * 50 + 310) % 360;

      return {
        border: `3px solid hsla(${hue}, 100%, 40%, 0.5)`,
      };
    }


  },
  beforeUnmount() {
    clearTimeout(this.timeoutId);
  },
  props: ["player"]
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 370px;
  perspective: 1000px;
  cursor: pointer;
  margin: 1rem auto;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background: #fefefe;
  transition: background-color 0.3s;
  background-image: url(data:image/png;base64,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);
}

.card-front {
  border: 3px solid hsla(0, 0%, 100%, 1);

}

.card-back {
  background-color: hsla(0, 0%, 100%, 0.8);
  background-blend-mode: lighten;
  transform: rotateY(180deg);
}


.progress-bar {
  position: absolute;
  bottom: -40px;
  left: 0;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  animation: progressAnim 3s linear forwards;
  width: 80%;
  border-radius: 5px;
}

@keyframes progressAnim {
  from {
    transform: scaleX(1);
    transform-origin: left;
  }
  to {
    transform: scaleX(0);
    transform-origin: left;
  }
}

</style>
