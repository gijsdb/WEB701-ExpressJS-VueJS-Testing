<template>
  <!-- eslint-disable -->
  <div class="container padTop">
    <div class="row">
      <div class="col">
        <h1>Marketplace</h1>
      </div>
    </div>
    <AddProduct></AddProduct>
     <div class="row padTop">
          <div class="col">
            <h1>Hops stored in database</h1>
          </div>
      </div>

    <div class="row padBottom">
      <div class="col-md-4" v-for="hop in hops" :key="hop.id">
        <div class="card hopCard" style="width: 18rem;">
          <img src="../assets/isolatedHop.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ hop.variety }}</h5>
            <p class="card-text"> Bitterness: {{hop.bitterness}}</p>
            <p class="card-text"> Sweetness: {{hop.sweetness}}</p>
            <p class="card-text"> Weight: {{hop.weight}}</p>
            <p class="card-text"> Price: {{hop.price}}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
/* eslint-disable */
import AddProduct from './AddProduct'
import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      hops: []
    }
  },
  components: {
    AddProduct
  }, 
  computed: {
    /*
    productChunks () {
      return _.chunk(Object.values(this.hops), 3)
    }
    */
  },
  created: function() {
    axios
      .get("http://localhost:8081/retrievehops")
      .then(res => {
        this.hops = res.data;
      })
  },
  methods: {
    
  }
}
</script>

<style scoped>
.hopCard {
  margin-top: 10px;
}
</style>
