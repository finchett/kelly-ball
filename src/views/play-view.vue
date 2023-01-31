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
  <div style="height: 100vh">
    <div class="carousel-container">
      <Carousel>
        <Slide v-for="slide in store.playerCards.length" :key="slide">
          <div class="slide">
            <div class="slide-title">Player {{ slide }}</div>
            <CardComponent>
              <NumberDiplay
                :numbers="store.playerCards[slide - 1].numbers"
              ></NumberDiplay>
            </CardComponent>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <button @click="back" class="back-button">Back</button>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-title {
  padding-bottom: 30px;
  font-weight: bold;
}

.slide {
  position: relative;
  margin: 25%;
}

.carousel__slide {
  padding: 10px;
}

.carousel-container {
  background-color: whitesmoke;
  border-radius: 20px;
}

.back-button {
  padding: 10px;
  width: 60px;
  margin: 5%;
}
</style>
