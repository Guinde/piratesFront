<template>
    <div class="container">
        <h1 class="mb-3">Login</h1>
        <form @submit.prevent="userLogin"
              class="shadow p-3 mb-5 bg-white rounded p-4 d-flex flex-column">
            <div class="form-group row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="text" 
                            id="name" 
                            placeholder="John Doe" 
                            v-model="login.name"
                            required>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-12">
                <input  type="password" 
                        class="form-control" 
                        id="inputPassword" 
                        placeholder="Password" 
                        v-model="login.password"
                        required>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <NuxtLink class="link" to="/register">Don't have an account ?</NuxtLink>
                <button type="submit" class="btn btn-dark ml-auto">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                const user = await this.$auth.user
            } catch (err) {
                console.err(err)
            }
        }
    }
}
</script>

<style>



</style>