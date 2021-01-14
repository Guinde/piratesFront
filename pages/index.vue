<template>
  <div class="container-home">
    <h1 class="title" v-if="$auth.loggedIn">
      Welcome aboard {{ this.$auth.user.captain.name }}
    </h1>
    <h1 class="title" v-else>
      Welcome aboard, create your own crew, but first please login
    </h1>
  </div>
</template>

<script>
export default {}
</script>

<style>

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 20px;
  text-align: center;
}

.container-home{
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
