<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col mt-5 header">
        <h1>WEB701 Express/Vue Testing</h1>
      </div>
    </div>
    <div class="row">
      <div class="col mt-5 desc">
        <p>Please login using Google to access the test database system</p>
      </div>
    </div>
    <div class="row button">
      <div class="col mt-5">
        <googleSignIn></googleSignIn>
      </div>
    </div>
  </div>
</template>
<script>
import googleSignIn from '../components/googleSignIn.vue';

export default {
  components: {
    googleSignIn,
  },
};
</script>
