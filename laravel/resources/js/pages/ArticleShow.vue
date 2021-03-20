<template>
  <div class="container-fluid p-5">
    <mavon-editor
      language="ja"
      v-model="article.content"
      :subfield="false"
      defaultOpen="preview"
      :toolbars="false"
      style="font-family: 'Noto Serif JP', serif"
    >
    </mavon-editor>
  </div>
</template>

<script>
export default {
  props: {
    articleId: String,
  },
  data: function () {
    return {
      article: {},
    };
  },
  methods: {
    getArticle() {
      axios.get("/api/articles/" + this.articleId).then((res) => {
        this.article = res.data;
      });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>