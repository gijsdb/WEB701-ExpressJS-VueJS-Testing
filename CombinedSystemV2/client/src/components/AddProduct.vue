<template>
  <div class="container padTop">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col">
            <h2>Add new hops</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <form class="AddHops">
                <div class="row">
                  <div class="col">
                  <label>Variety</label><br>
                  <input type="text" v-model="variety" name="variety" placeholder="variety"><br>
                  <label>Weight (KG)</label><br>
                  <input type="number" v-on:input="calculatePrice" v-model="weight" name="amount"  min="1" max="100" placeholder="weight"><br>
                  </div>
                  <div class="col">
                    <label>Bitterness</label><br>
                    <input type="number" v-on:input="calculatePrice" v-model="bitterness" name="bitterness" placeholder="bitterness" value="1" min="1" max="10"><br>
                    <label>Sweetness</label><br>
                    <input type="number" v-on:input="calculatePrice" v-model="sweetness" name="sweetness" placeholder="sweetness" value="1" min="1" max="10"><br>
                  </div>
                </div>
                <label>Price (NZD)</label><br>
                <input type="number" v-model="price" name="price" placeholder="0 Dollars"><br>
                <button @click="addHop" class="btnAddHop">Add hop</button><br>
              <div class="error" v-html="error"/><br>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Free for extra fuctions</h2>
      </div>
    </div>
  </div>
</template>

<script>
import hopService from '../services/hopService'
export default {
  data () {
    return {
      variety: '',
      weight: '',
      bitterness: '',
      sweetness: '',
      price: '',
      userId: this.$store.state.user.email,
      error: null
    }
  },
  computed: {
  },
  methods: {
    calculatePrice: function () {
      // var sweetness = this.sweetness
      // var bitterness = this.bitterness
      var weight = this.weight
      var price
      var multiplier
      if (weight >= 1 && weight <= 20) {
        multiplier = 3
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 21 && weight <= 40) {
        multiplier = 2.7
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 41 && weight <= 60) {
        multiplier = 2.5
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 61 && weight <= 80) {
        multiplier = 2.3
        price = weight * multiplier
        this.price = price.toFixed(2)
      } else if (weight >= 81 && weight <= 100) {
        multiplier = 2.1
        price = weight * multiplier
        this.price = price.toFixed(2)
      }
    },
    async addHop () {
      try {
        await hopService.addhop({
          variety: this.variety,
          weight: this.weight,
          bitterness: this.bitterness,
          sweetness: this.sweetness,
          price: this.price,
          userId: this.userId
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
.AddHops input {
  text-align: center;
}

.AddHops label {
  margin-top: .5em;
}

.btnAddHop {
  margin-top: 1em;
}
</style>
