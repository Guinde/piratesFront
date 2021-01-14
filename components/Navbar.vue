<template>
    <nav class="navbar navbar-light bg-light w-100">
        <NuxtLink class="ml-2 link" to="/">Home</NuxtLink>
        <div class="my-2 my-lg-0">
            <div class="navbar-nav ml-auto d-flex flex-row">
                <div class="d-flex" v-if="!$auth.loggedIn">
                    <span class="mr-4" >
                        <NuxtLink class="link" to="/login">Login</NuxtLink>
                    </span>
                    <span>
                        <NuxtLink class="link" to="/Register">Register</NuxtLink>
                    </span>
                </div>
                <div class="d-flex" v-if="$auth.loggedIn">
                    <span class="mr-4">
                        <NuxtLink class="link" to="/crew">Crew</NuxtLink>
                    </span>
                    <span class="mr-4">
                        <NuxtLink class="link" to="/profile">Profile</NuxtLink>
                    </span>
                    <span >
                        <a class="logout link" @click="logout">Logout</a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        async logout() {
            try {
                await this.$auth.logout('local', { });
            } catch (err) {
                console.err(err)
            }
        }
    }
}
</script>

<style scoped>
nav {
    height: 6vh;
}
.logout{
    cursor: pointer;
}
.nuxt-link-exact-active {
  color: #0056b3;
}

.link:hover {
  text-decoration: none;
}
</style>