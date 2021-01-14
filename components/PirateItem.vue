<template>
    <div class="d-flex d-flex justify-content-between px-4 py-2">
        <span> {{ pirate.name }} </span>
        <span>{{ pirate.age }} ans </span>
        <span>{{ pirate.status }} </span>
        <button class="btn btn-outline-secondary btn-sm">
            <span @click="selectpirate(pirate, index)">{{button}}</span>
        </button>
  </div>
</template>

<script>
export default {
 props: ['pirate', 'button', 'index'],
 methods: {
     selectpirate(pirate, index) {
         this.$emit("select-pirate", {pirate: pirate, index: index})
     },
 }
}
</script>

<style scoped>
span{
    font-size: 15px;
}

</style>