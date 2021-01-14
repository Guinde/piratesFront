<template>
    <div class="listPirates">
        <h2 class="mb-4">{{ this.$auth.user.captain.crew }} crew</h2>
        <div class="list-crew">
            <PirateItem v-for="(pirate, index) in listPirates" 
                        :key="pirate._id" 
                        :pirate="pirate" 
                        :index="index" 
                        :button="button"
                        @select-pirate="removeMemberOfCrew"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            button: 'remove'
        }
    },
    computed: {
        listPirates () {
            return this.$store.state.pirates.listMemberOfCrew;
    }
  },
    methods: {
      async removeMemberOfCrew(params) {
        try {
            await this.$axios.post('/api/captain/removePirate', params.pirate)
            this.$store.commit('pirates/removeMemberOfCrew', params.index)
            this.$store.commit('pirates/addPirateTolist', {...params.pirate})
        } catch(e) {
            console.err(e)
        }
      }
  }
}
</script>
<style scoped>
    .list-crew{
        height: 85%;
        width: 100%;
        overflow-y: scroll;
    }
</style>