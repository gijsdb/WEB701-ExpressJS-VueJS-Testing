<template>
  <!-- eslint-disable -->
  <div>
    <h2>Bidding</h2>
    <label>Price</label>
    <input type="number" v-model="bidAmount" name="amount" placeholder="0 Dollars"><br>
    <button @click="addBid">Place bid</button><br>
    <div class="error" v-html="error"/><br>
    <ul id="bid-list">
      <li v-for="bid in matchingBids" :key="bid.bidId">
        <p>Bid amount of ${{ bid.bidAmount }} by {{bid.userId}} at {{bid.createdAt}} </p>
      </li>
    </ul>
  </div>
</template>

<script>
import bidService from '../services/bidService'
import axios from 'axios'

export default {
  data () {
    return {
      bidAmount: '',
      userId: '',
      hopId: '',
      error: null,
      matchingBids: [],
      allBids: []
    }
  },
  created: function () {
    axios
      .get('http://localhost:8081/retrievebids')
      .then(res => {
        this.allBids = res.data
        this.allBids.forEach(element => {
          if (element.hopId === this.hop.hopId) {
            this.matchingBids.push(element)
          }
        })
        // this.bids = res.data
      })
  },
  /*
  computed: {
    showTheBids: function () {
      const matchingBids = []
      this.bids.forEach(element => {
        if (element.hopId === this.hop.hopId) {
          matchingBids.push(element)
        }
      })
      return matchingBids
    }
  },
  */
  methods: {
    async addBid () {
      try {
        const newHop = await bidService.addbid({
          bidAmount: this.bidAmount,
          userId: this.$store.state.user.email,
          hopId: this.hop.hopId
        })
        console.log(newHop)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  props: ['hop']
}
</script>

<style scoped>
</style>
