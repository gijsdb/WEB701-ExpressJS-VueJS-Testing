<template>
  <button v-google-signin-button="clientId" class="google-signin-button">Login w/ Google</button>
</template>

<script>
export default {
  data: () => ({
    clientId: '1068991110209-i46mufsbmom9csn2dit12o2v1876fer9.apps.googleusercontent.com',
  }),
  computed: {
    username() {
      return this.$store.getters.user;
    },
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://oauth2.googleapis.com/tokeninfo?id_token=' + idToken); // eslint-disable-line prefer-template
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText); // eslint-disable-line prefer-template
        const data = xhr.responseText;
        const jsonResponse = JSON.parse(data); // eslint-disable-line no-trailing-spaces
        console.log(jsonResponse);
        console.log(this.$store.state.user);
        this.$store.dispatch('setUser', jsonResponse.user);
      };
      xhr.send('idtoken=' + idToken); // eslint-disable-line prefer-template
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
  },
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
