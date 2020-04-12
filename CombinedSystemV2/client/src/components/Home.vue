<template>
  <div class="container padTop">
    <div class="row">
        <div class="col">
            <h1>WEB701 Assignment 2, Milestone 2</h1>
            <p>This project shows how I built the basic functionality required using Express JS for the backend and Vue JS for the frontend.</p>
        </div>
    </div>
    <div class="row" v-if="$store.state.isUserLoggedIn">
      <div class="col">
        <p>You are logged in</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
