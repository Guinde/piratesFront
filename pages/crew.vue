<template>
    <div class="container d-flex flex-row justify-content-between">
        <ListMemberOfCrew />
        <ListPirates />
    </div>
</template>

<script>
export default {
    async created() {
        const list = await this.$axios.get('/api/pirates/all');
        this.listPirates = [...list.data.data];
        this.$store.commit('pirates/addListAllPirates', [...list.data.data])
        this.$store.commit('pirates/addListAllMember', [...this.$auth.user.memberOfCrew])
  }
}
</script>

<style>
.listPirates{
    border: 1px solid #000;
    height: 85%;
    width: 40%;
}
</style>