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
  mounted() {
    if (this.store.playerCards.length == 0) {
      this.$router.replace("/");
    }
  },
};
</script>

<template>
  <div>
    <Carousel>
      <Slide v-for="slide in store.playerCards.length" :key="slide">
        <div>
          Player {{ slide }}
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

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
