<template>
  <!-- eslint-disable -->
  <div class="container padTop">
        <router-link class="nav-link padBottom" to="../marketplace">Back</router-link>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
              <div class="col-6">
                <h2>Variety</h2>
                <h3>{{ hop.variety }} </h3><br>
                <h2>Weight</h2>
                <h3>{{ hop.weight }} </h3><br>
              </div>
              <div class="col-6">
                <h2>Bitterness</h2>
                <h3>{{ hop.bitterness }} </h3><br>
                <h2>Sweetness</h2>
                <h3>{{ hop.sweetness }} </h3><br>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h2>Price</h2>
                <h3>{{ hop.price }} </h3><br>
              </div>
            </div>
        </div>
        <div class="col-md-6">
          <Bidding :hop="hop"></Bidding>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bidding from './Bidding'

export default {
  data () {
    return {
      hop: {}
    }
  },
  components: {
    Bidding
  },
  created: function () {
    axios
      .get('http://localhost:8081/retrievehop/' + this.$route.params.id)
      .then(res => {
        this.hop = res.data
      })
  }
}
</script>

<style scoped>
</style>
