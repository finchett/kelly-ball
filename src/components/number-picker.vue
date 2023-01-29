<script>
export default {
  props: {
    itemName: String,
    min: Number,
    max: Number,
  },
  emits: ["select"],
  data() {
    return {
      selection: null,
      card: "card",
    };
  },
  methods: {
    getLightColor(n) {
      return {
        background: `hsl(${n * 50 + 310}, 100%, 75%)`,
      };
    },
    submit(n) {
      this.$emit("select", n);
      this.selection = n;
    },
    selected(n) {
      if (this.selection == null) {
        return;
      }

      return n == this.selection ? "selected" : "unselected";
    },
  },
};
</script>

<template>
  <h2>{{ this.itemName }}</h2>
  <span
    v-for="n in max - min + 1"
    v-bind:key="n"
    @click="submit(n + min - 1)"
    :class="[card, selected(n + min - 1)]"
    :style="getLightColor(n + min - 1)"
  >
    {{ n + min - 1 }}
  </span>
</template>

<style>
.card {
  display: inline-flex;
  margin: 5px;
  padding: 4%;
  font-size: 22px;
  color: black;
  border-radius: 2px;
  font-family: Cantarell, Calibri;
  font-weight: bold;
  filter: drop-shadow(0px 3px 5px #8a8a8a);
  text-align: center;
  animation: wiggle 2.5s infinite;
  transition: all 0.2s ease-in-out;
  user-select: none;
}

.card:hover:not(.selected) {
  filter: drop-shadow(0px 15px 12px #8a8a8a);
}

.selected {
  /* filter needed for safari rendering */
  filter: drop-shadow(0px 0px 0px #8a8a8a);
  transition: all 0.3s ease-in-out;
  animation: none;
}

.unselected {
  /* filter needed for safari rendering */
  filter: drop-shadow(0px 0px 0px #8a8a8a);
  transition: all 0.3s ease-in-out;
  opacity: calc(0.2);
  animation: none;
}
</style>
