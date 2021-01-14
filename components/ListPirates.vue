<template>
    <div class="listPirates">
        <h2 class="mb-4">Listes Of Pirates</h2>
        <div class="list-crew">
            <PirateItem v-for="(pirate, index) in listPirates"
                        :key="pirate._id"
                        :pirate="pirate"
                        :index="index"
                        :button="button"
                        @select-pirate="addNewPirate"
                        />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            button: 'add'
        }
    },
    computed: {
        listPirates () {
            return this.$store.state.pirates.listAllPirates
    }
  },
  methods: {
      async addNewPirate(params) {
        try {
            await this.$axios.post('/api/captain/addNewPirate', params.pirate)
            this.$store.commit('pirates/addNewMemberOfCrew', {...params.pirate})
            this.$store.commit('pirates/removePirateOfList', params.index)
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