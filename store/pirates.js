export const state = () => ({
    listMemberOfCrew: [],
    listAllPirates: []
  })
  
  export const mutations = {
    addListAllPirates(state, list) {
      state.listAllPirates = [...list];
    },
    addListAllMember(state, list) {
      state.listMemberOfCrew = [...list];
    },
    addPirateTolist(state, pirate) {
      state.listAllPirates.push({...pirate})
    },
    addNewMemberOfCrew(state, pirate) {
      state.listMemberOfCrew.push({...pirate})
    },
    removePirateOfList(state, index) {
      state.listAllPirates.splice(index, 1)
    },
    removeMemberOfCrew(state, index) {
      state.listMemberOfCrew.splice(index, 1)
    },
  }