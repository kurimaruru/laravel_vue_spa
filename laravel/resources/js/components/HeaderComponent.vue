<template>
  <div id="header">
    <div class="jumbotron jumbotron-fluid" 
    style="background-image: url('/img/flower.jpeg'); background-repeat:no-repeat; background-size:cover;
    font-family: 'Noto Serif JP', serif;
    ">
      <div class="container" style="color:white;">
        <h1 class="display-4" style="text-align:center;"
        v-observe-visibility="visibilityChangedco"
        v-bind:class="[isVisibleco === true ? 'fade1' : 'a']"
        >Kurichan Engineering</h1><br>
        <p class="lead" style="text-align:center;"
        v-observe-visibility="visibilityChangedco"
        v-bind:class="[isVisibleco === true ? 'fade2' : 'a']"
        >〜KurichanのプログラミングBlog〜</p><br>
        <p style="text-align:center;"
        v-observe-visibility="visibilityChangedco"
        v-bind:class="[isVisibleco === true ? 'fade1' : 'a']"
        >This is a single page blog which is maked laravel×vue.js</p>
    </div>
</div>
  </div>
</template>
 
 <script>
export default {
  name: "header",
  data() {
    return {
      isVisible05: false,
      isVisibleco: false,
      isVisiblede: false,
      isVisibleword: false,
    };
  },
  methods: {
    visibilityChanged05(isVisible05, entry) {
      this.isVisible05 = isVisible05;
    },
    visibilityChangedco(isVisibleco, entry) {
      this.isVisibleco = isVisibleco;
    },
    visibilityChangedde(isVisiblede, entry) {
      this.isVisiblede = isVisiblede;
    },
    visibilityChangedword(isVisibleword, entry) {
      this.isVisibleword = isVisibleword;
    },
  },
};
</script>
<style scoped>
  /* アニメーション */
.fade-in {
  font-size: 40px;
  opacity: 0;
  animation-name: sample02;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes sample02 {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(50px);
  }
}
.fade1 {
  opacity: 0;
  animation-name: my-text;
  animation-duration: 2s;
  /* animation-iteration-count: infinite; */
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes my-text {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fade2 {
  opacity: 0;
  animation-name: my-picture;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes my-picture {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fade3 {
  opacity: 0;
  animation-name: title-fade;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes title-fade {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade4 {
  opacity: 0;
  animation-name: title-fade1;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes title-fade1 {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.a {
  opacity: 0;
}
</style>