<script>
export default {};
</script>

<template>
  <div style="position: relative">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.slide-leave-to {
  opacity: 0;
  transform: translateX(40%);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-40%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0%);
}

.slide-enter-active,
.slide-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.8s;
}
</style>
