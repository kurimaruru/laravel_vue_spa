<template>
  <div class="container">
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Show</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(article,index) in articles" :key="index">
          <th scope="row">{{ article.id }}</th>
          <td>{{ article.title }}</td>
          <td>
              <router-link v-bind:to="{name: 'article.show', params: {articleId: article.id }}">
                  <button class="btn btn-primary">Show</button>
              </router-link>
          </td>
          <td>
              <router-link v-bind:to="{name: 'article.edit', params: {articleId: article.id }}">
                  <button class="btn btn-success">Edit</button>
              </router-link>
          </td>
          <td>
              <button class="btn btn-danger" v-on:click="deleteArticle(article.id) ">Delete</button>
          </td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="logout">
        <button type="button" @click="logout" class="btn btn-primary">ログアウト</button>
      </div>
      <router-link v-bind:to="{name: 'article.create'}">
        <button class="btn btn-success">create new article</button>
      </router-link>
  </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      // 空配列
      articles: [],
      user: "",
    };
  },
  methods: {
    // 記事一覧APIにリクエスト
    getArticles() {
      axios.get("/api/articles").then((res) => {
        this.articles = res.data;
      });
    },
      deleteArticle(id){
    axios.delete('/api/articles/' + id)
      .then((res) =>{
        this.getArticles();
      });
    },
    logout(){
      axios.post('api/logout')
        .then(res =>{
          console.log(res);
          localStorage.removeItem('auth');
          this.$router.push('/login');
        })
        .catch(error =>{
          console.log(error);
        });
    }
  },

  mounted() {
    // メソッドの呼び出し
    this.getArticles();
  },
};
</script>
