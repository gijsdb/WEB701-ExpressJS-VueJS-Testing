<template>
  <div class="container padTop">
    <div class="row">
      <div class="col">
        <h1>Register</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input
          type="text"
          name="email"
          v-model="email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"
        />
        <div class="error padTop" v-html="error"/><br>
        <div class="success" v-html="successMessage"/><br>
        <button @click="register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../services/authService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      successMessage: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await authService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
        this.successMessage = 'User created'
      } catch (error) {
        this.successMessage = 'User created'
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
