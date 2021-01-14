<template>
    <div class="container">
        <h1 class="mb-3">Register</h1>
        <form @submit.prevent="userRegister"
              class="shadow p-3 mb-5 bg-white rounded p-4 d-flex flex-column">
            <div class="form-group row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="text" 
                            id="name" 
                            placeholder="John Doe" 
                            v-model="register.name"
                            required>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="number" 
                            id="name" 
                            placeholder="25" 
                            v-model="register.age"
                            required>
                </div>
            </div>
                       <div class="form-group row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Crew</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="text" 
                            id="name" 
                            placeholder="Mugiwara" 
                            v-model="register.crew"
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
                        v-model="register.password"
                        required>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <NuxtLink class="link" to="/login">Already have an account ?</NuxtLink>
                <button type="submit" class="btn btn-dark ml-auto">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            register: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        async userRegister() {
            this.$axios.post('/api/auth/register', this.register).then(
                () => {
                    this.$router.push('/login')
                }
            );
        }
    }
}
</script>

<style>
</style>