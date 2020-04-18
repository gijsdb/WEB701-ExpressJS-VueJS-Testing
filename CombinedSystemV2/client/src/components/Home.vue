<template>
  <div class="container padTop">
    <div class="row">
        <div class="col">
            <h1>WEB701 Assignment 2, Milestone 2</h1>
            <p>This project shows how I built the basic functionality required using Express JS for the backend and Vue JS for the frontend.</p>
        </div>
    </div>
    <div class="row padTop" v-if="$store.state.isUserLoggedIn">
      <div class="col-6">
        <!-- <p>Hello {{this.$store.state.user.email}}</p> !-->
        <div class="row">
          <div class="col">
            <h2>Account details</h2>
            <p>{{this.$store.state.user.email}}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col">
            <h2>Update account details</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
