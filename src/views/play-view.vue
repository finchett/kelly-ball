<script>
import CardComponent from "../components/card-component.vue";
import { store } from "../store/store.js";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
  <p>{{ store.playerCards }}</p>
  <CardComponent></CardComponent>
</template>
