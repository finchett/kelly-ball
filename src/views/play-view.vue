<script>
import CardComponent from "../components/card-component.vue";
import NumberDiplay from "../components/number-display.vue";
import { store } from "../store/store.js";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    CardComponent,
    NumberDiplay,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    back() {
      this.$router.replace("/");
    },
  },
  mounted() {
    if (this.store.playerCards.length == 0) {
      this.$router.replace("/");
    }
  },
};
</script>

<template>
  <div class="play-div">
    <div class="carousel-container">
      <Carousel>
        <Slide v-for="slide in store.playerCards.length" :key="slide">
          <div class="slide">
            <div class="slide-title">Player {{ slide }}</div>
            <CardComponent :player="slide">
              <NumberDiplay :numbers="store.playerCards[slide - 1].numbers"></NumberDiplay>
            </CardComponent>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div class="info-box">
      Swipe to go to the next player.
    </div>

    <button @click="back" class="back-button">Back</button>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
}

.slide-title {
  padding-bottom: 30px;
  font-weight: bold;
}

.slide {
  position: relative;
}

.carousel__slide {
  padding: 10px;
}

.carousel-container {
  border-radius: 20px;
}

.back-button {
  display: block;
  margin: 2rem auto;
  padding: 0.6rem 1.2rem;
  width: fit-content;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #222;
}

.play-div {
  height: 100%;
  margin: auto;
}

.info-box {
  background-color: #e0f2ff;
  color: #0369a1;
  padding: 0.75rem 1.25rem;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  width: fit-content;
  margin: 1rem auto;
  margin-top: 30px;
}

</style>
