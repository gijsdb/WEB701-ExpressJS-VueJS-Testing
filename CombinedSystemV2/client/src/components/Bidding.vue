<template>
  <!-- eslint-disable -->
  <div>
    <h2>Bids</h2>
    <label>Price</label>
    <input type="number" v-model="amount" name="amount" placeholder="0 Dollars"><br>
    <button @click="addBid">Place bid</button><br>
    <div class="error" v-html="error"/><br>
  </div>
</template>

<script>
import bidService from '../services/bidService'
export default {
  data () {
    return {
      amount: '',
      userId: this.$store.state.user.email,
      error: null
    }
  },
  methods: {
    async addBid () {
      try {
        await bidService.addbid({
          amount: this.amount,

          hopId: this.userId
        })
        this.$router.replace({'query': null})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
