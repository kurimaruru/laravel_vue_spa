<template>

    <div>
        <form @submit.prevent="login">
            <div class="form-row align-items-center">
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName">email</label>
                    <input type="text" v-model="email" class="form-control" id="inlineFormInputName" placeholder="E-mail"/>
                    <span v-if="errors.email">
                        {{ errors.email[0] }}
                    </span>
                </div>
                <div class="col-sm-3 my-1">
                    <label class="sr-only" for="inlineFormInputName">パスワード</label>
                    <input type="password" v-model="password" class="form-control" id="inlineFormInputName" placeholder="Pssword"/>
                    <span v-if="errors.password">
                        {{ errors.password[0] }}
                    </span>
                </div>

                <button class="btn btn-primary">ログイン</button>
            </div>
        </form>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },
    methods: {
        login() {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios
                    .post("/api/login", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        console.log(response);
                        localStorage.setItem("auth", "ture");
                        this.$router.push("/admin");
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors;
                    });
            });
        }
    }
};
</script>