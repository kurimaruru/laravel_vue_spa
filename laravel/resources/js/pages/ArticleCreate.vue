
<template>
  <div class="container-fluid">
    <form v-on:submit.prevent="submit">
      <div class="form-group">
        <label for="title" class="form-check-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="article.title" />
      </div>
      <div class="form-group">
        <mavon-editor
              language="ja"
              v-model="article.content"
              class=""
            ></mavon-editor>
      </div>
      <div class="form-group form-check">
         <label for="person-in-charge" class="form-check-label">Person In Charge</label>
            <input
              type="text"
              class="form-control"
              id="person-in-charge"
              v-model="article.person_in_charge"
            />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      article: {},
    };
  },
  methods: {
    submit() {
      axios
        .post("/api/articles", this.article)
        .then((res) => {
          this.$router.push({ name: "admin" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>