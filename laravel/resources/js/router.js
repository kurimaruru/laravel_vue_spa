import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './pages/PhotoList.vue'
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
    component: PhotoList
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
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
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
