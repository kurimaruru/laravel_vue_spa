import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'


import ExampleComponent from "./components/ExampleComponent.vue";
import HeaderComponent from "./components/HeaderComponent";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component',HeaderComponent);



new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  // components: { App }, // ルートコンポーネントの使用を宣言する
  // template: '<App />' // ルートコンポーネントを描画する
})

