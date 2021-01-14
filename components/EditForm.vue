<template>
    <div class="container">
        <div v-if="successUpdate" class="badge badge-success my-3">
            <p>Your information was updated successfully !</p> 
        </div>
        <h1 class="mb-3">My Profile</h1>
        <form @submit.prevent="editProfile"
            class="shadow p-3 mb-5 bg-white rounded p-4 d-flex flex-column">
            <div class="form-group row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="text" 
                            id="name" 
                            v-model="data.name"
                            placeholder="John Doe" 
                            required>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label for="age" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="number" 
                            id="age" 
                            v-model="data.age"
                            placeholder="28" 
                            required>
                </div>
            </div>
            <div class="form-group row mb-3">
                <label for="crew" class="col-sm-2 col-form-label">Crew</label>
                <div class="col-sm-12">
                    <input  class="form-control"
                            type="text" 
                            id="crew" 
                            v-model="data.crew"
                            placeholder="Mugiwara" 
                            required>
                </div>
            </div>
            <button type="submit" class="btn btn-dark ml-auto">Edit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            successUpdate: false,
            data: {
                name: this.$auth.user.captain.name,
                age: this.$auth.user.captain.age,
                crew: this.$auth.user.captain.crew
            }
        }
    },
    methods: {
        async editProfile() {
            try {
                const updateData = await this.$axios.post('/api/captain/edit', this.data);
                const captain = updateData.data.data;
                this.$auth.setUser(captain);
                this.successUpdate = true;
            } catch (err) {
                console.err(err)
            }
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.badge{
    height: 30px;
    line-height: 30px;
    text-align: center;
}

</style>