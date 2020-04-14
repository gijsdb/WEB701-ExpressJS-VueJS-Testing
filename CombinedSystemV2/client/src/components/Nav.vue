<template>
<section class="spikes">
  <nav>
    <ul class="justify-content-center nav">
      <li class="nav-item">
          <router-link class="nav-link hover" to="/">Home</router-link>
      </li>
      <li v-if="!$store.state.isUserLoggedIn" class="nav-item my-auto">
          <router-link class="nav-link hover" to="register">Register</router-link>
      </li>
      <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link hover" to="login">Login</router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn" class="nav-item">
          <router-link class="nav-link hover" to="../marketplace">Marketplace</router-link>
      </li>
      <li v-if="$store.state.isUserLoggedIn" class="nav-item">
          <p class="nav-link logout hover" @click="logout">Log out</p>
      </li>
    </ul>
  </nav>
</section>
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
nav {
}

.nav-link {
  color: #EBD77D;
  font-size: 1.3em;
}

.logout {
  color: red;
  transition: .5s;
}

.hover {
  transition: .5s;
}

.hover:hover {
  font-size: 1.5em;
  transition: .5s;
  cursor: pointer;
}

.spikes {
  position: relative;
  background: #15B374;
  height: 6em;
  padding-top: 1.5em;
}

.spikes::after {
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  top: 100%;
  z-index: 10;
  display: block;
  height: 49px;
  background-size: 49px 100%;
  background-image: linear-gradient(135deg, #15B374 25%, transparent 25%), linear-gradient(225deg, #15B374 25%, transparent 25%);
  background-position: 0%;
}

</style>
