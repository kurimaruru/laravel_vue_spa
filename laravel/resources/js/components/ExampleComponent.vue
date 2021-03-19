<template>
  <div class="container p-4">
    <h1>Articles</h1>
     <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">created</th>
          <th scope="col">Show</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles" :key="index">
          <td>{{ article.title }}</td>
          <td>{{ article.created_at | moment("YYYY/MM/DD") }}</td>
          <td>
            <router-link
              v-bind:to="{
                name: 'article.show',
                params: { articleId: article.id },
              }"
            >
              <button class="btn btn-primary">Show</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // 空配列
      articles: [],
    };
  },
  methods: {
    // 記事一覧APIにリクエスト
    getArticles() {
      axios.get("/api/articles").then((res) => {
        this.articles = res.data;
      });
    },
  },

  mounted() {
    // メソッドの呼び出し
    this.getArticles();
  },
};
</script>
