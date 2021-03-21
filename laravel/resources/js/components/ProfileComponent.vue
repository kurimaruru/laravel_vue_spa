<template>
  <div class="content" id="profile" style="font-family: 'Noto Serif JP', serif;">
    <div class="row" style="border-bottom: solid 1px black">
      <div class="col-7 col-md-4" style="margin: 0 auto"
      v-observe-visibility="visibilityChangedco"
      v-bind:class="[isVisibleco === true ? 'fade4' : 'a']"
      >
        <img src="/img/profile.jpeg" alt="profile" class="rounded-circle" style="padding:0 0 10px 20px;"/>
      </div>
      <div class="col-7 col-md-1"></div>
      <div class="col-12 col-md-7">
        <div class="myprofile"
        v-observe-visibility="visibilityChanged05"
        v-bind:class="[isVisible05 === true ? 'fade3' : 'a']"
        >
          <h1 style="border-bottom: solid 1px black">Profile</h1>
          <h3>Kurichan</h3>
          <p style="padding-right:25px;">
            &nbsp;&nbsp;&nbsp;&nbsp;KurichanBlogを拝見して頂きありがとうございます。私は文系大学教育学部出身のSEです。
            大学４年の6月ごろプログラミングに興味を持ち、PCスキル０の状態から勉強を始めました。
            Education × Technology
            (EdTech)に興味があるので、将来的にはそのようなシステムやアプリを開発したいと考えています。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;このブログでは、プログラミングの技術的な情報発信や、私が今後SEとして働く中で感じたことなどを皆様にお伝えすることができたら良いなと思っております。
          </p>
        </div>
        <div class="qualify" 
        v-observe-visibility="visibilityChangedco"
        v-bind:class="[isVisibleco === true ? 'fade2' : '']"
        >
          <h3>Qualification</h3>
          <ul style="list-style:none;">
            <li>小学校教諭一種免許状</li>
            <li>特別支援学校教諭一種免許状</li>
            <li>ITパスポート</li>
            <li>MOS Excel specialist</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
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
  animation-duration: 5s;
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
  animation-duration: 5s;
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
  animation-duration: 5s;
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