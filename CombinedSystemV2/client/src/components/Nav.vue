<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
        <router-link class="nav-link" to="register">Register</router-link>
    </li>
    <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
        <router-link class="nav-link" to="login">Login</router-link>
    </li>
    <li v-if="$store.state.isUserLoggedIn" class="nav-item">
        <router-link class="nav-link" to="../marketplace">Marketplace</router-link>
    </li>
    <li v-if="$store.state.isUserLoggedIn" class="nav-item">
        <p class="nav-link" @click="logout">Log out</p>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
