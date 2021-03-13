import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import ExampleComponent from './components/ExampleComponent.vue'
// login
import Login from './pages/Login.vue'
import Admin from './pages/Admin.vue'
import ArticleShow from './pages/ArticleShow.vue'
import ArticleCreate from './pages/ArticleCreate.vue'
import ArticleEdit from './pages/ArticleEdit.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: ExampleComponent
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {guestOnly: true}
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {authOnly: true}
  },
  {
    path: '/articles/create',
    name: 'article.create',
    component: ArticleCreate
  },
  {
    path: '/articles/:articleId',
    name: 'article.show',
    component: ArticleShow,
    props: true
  },
  {
    path: '/articles/:articleId/edit',
    name: 'article.edit',
    component: ArticleEdit,
    props: true
  },

]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',
    routes
});

// ルートメタフィールド
function isLoggedIn() {
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
      if (!isLoggedIn()) {
          next("/login");
      } else {
          next();
      }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
      if (isLoggedIn()) {
          next("/admin");
      } else {
          next();
      }
  } else {
      next();
  }
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
