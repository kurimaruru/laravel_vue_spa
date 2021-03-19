
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label">Title</label>
                        <input type="text" class="col-sm-9 form-control" id="title" v-model="article.title">
                    </div>
                    <div class="form-group row">
                        <mavon-editor language="ja" v-model="article.content" class="col-sm-9 form-control"></mavon-editor>
                    </div>
                    <div class="form-group row">
                        <label for="person-in-charge" class="col-sm-3 col-form-label">Person In Charge</label>
                        <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="article.person_in_charge">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                article: {}
            }
        },
        methods:{
            submit(){
                axios.post('/api/articles',this.article)
                    .then((res)=>{
                        this.$router.push({name: 'admin'});
                    })
            }
        }
    }
</script>