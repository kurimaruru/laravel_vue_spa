import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import 'mavon-editor/dist/highlightjs/highlight.min.js'
import 'mavon-editor/dist/katex/katex.min.css'
import 'mavon-editor/dist/katex/katex.min.js'
// TimeFormat
import vueMoment from 'vue-moment';

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component',HeaderComponent);
Vue.component('footer-component',FooterComponent);
Vue.component('profile-component',ProfileComponent);
Vue.use(mavonEditor);
Vue.use(vueMoment);

export default{
  
}

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
})

