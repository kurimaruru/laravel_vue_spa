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


import ExampleComponent from "./components/ExampleComponent.vue";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent.vue";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component',HeaderComponent);
Vue.component('footer-component',FooterComponent);
Vue.use(mavonEditor);

export default{
  data: () => ({
    mavonEditor: {
      externalLink: {
        markdown_css: function() {
          return '/static/css/markdown/github-markdown.min.css'
        },
        hljs_js: function() {
          return '/static/js/highlightjs/highlight.min.js'
        },
        katex_css: function() {
          return '/static/css/katex/katex.min.css'
        },
        katex_js: function() {
          return '/static/js/katex/katex.min.js'
        },
      },
      // ツールバーにどのボタンを追加するか
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        undo: true,
        redo: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true,
      },
    },
  }),
}

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
})

