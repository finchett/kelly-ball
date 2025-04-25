<script>
export default {
  data() {
    return {
      ball: "ball",
      class_number: `ball-${this.number}`,
    };
  },
  props: ["number"],
};
</script>

<template>
  <div :class="[ball, class_number]">
    <div class="inner-circle">{{ this.number }}</div>
  </div>
</template>

<style scoped>
.ball {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 0px 0px 4px hsla(0, 0%, 100%, 1);
  filter: drop-shadow(0px 2px 5px hsla(0, 0%, 54%, 0.3));
}

.inner-circle {
  background-color: #fffcf3;
  height: 50%;
  width: 50%;
  border-radius: 50%;
  position: absolute;
  font-weight: bold;
  text-align: center;
  font-size: 21px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  user-select: none;
}

.ball-1 {
  background: linear-gradient(to right, #e7c800, #fff200);
}

.ball-2 {
  background: linear-gradient(to right, #0000ff, #4577ff);
}

.ball-3 {
  background: linear-gradient(to right, #ff0000, #ff6648);
}

.ball-4 {
  background: linear-gradient(to right, #800080, #dd00ff);
}

.ball-5 {
  background: linear-gradient(to right, #ffa500, #ffca2c);
}

.ball-6 {
  background: linear-gradient(to right, #008000, #0cac0c);
}

.ball-7 {
  background: linear-gradient(to right, #800000, #981c09);
}

.ball-8 {
  background: linear-gradient(to right, #000000, #383838);
}

.ball-9 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #fff200 20%,
    #f5d506 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-10 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #4577ff 20%,
    #0000ff 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-11 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #ff6648 20%,
    #ff0000 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-12 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #dd00ff 20%,
    #800080 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-13 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #ffca2c 20%,
    #ffa500 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-14 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #0cac0c 20%,
    #008000 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}

.ball-15 {
  background: linear-gradient(
    #fffcf3 0,
    #f0ead6 20%,
    #981c09 20%,
    #800000 80%,
    #f0ead6 80%,
    #dfd8c1 100%
  );
}
</style>
