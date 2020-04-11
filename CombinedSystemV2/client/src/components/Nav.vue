<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="register">Register</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="login">Login</router-link>
    </li>
    <li v-if="$store.state.isUserLoggedIn" class="nav-item">
        <router-link class="nav-link" to="marketplace">Marketplace</router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
