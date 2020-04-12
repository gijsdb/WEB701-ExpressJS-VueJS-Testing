<template>
  <div class="container padTop">
    <div class="row">
          <div class="col">
            <form class="AddHops">
              <h1>Add new hops</h1>
              <label>Variety</label>
              <input type="text" v-model="variety" name="variety" placeholder="variety"><br>
              <label>Weight</label>
              <input type="number" v-model="amount" name="amount" placeholder="0(kg)"><br>
              <label>Bitterness</label>
              <input type="number" v-model="bitterness" name="bitterness" placeholder="0 - 10"><br>
              <label>Sweetness</label>
              <input type="number" v-model="sweetness" name="sweetness" placeholder="0 - 10"><br>
              <label>Price</label>
              <input type="number" v-model="price" name="price" placeholder="0 Dollars"><br>
              <button @click="addHop">Add hop</button><br>
            <div class="error" v-html="error"/><br>
            <div class="success" v-html="successMessage"/><br>
            </form>
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
      error: null,
      successMessage: null
    }
  },
  methods: {
    async addHop () {
      try {
        await hopService.addhop({
          variety: this.variety,
          weight: this.weight,
          bitterness: this.bitterness,
          sweetness: this.sweetness,
          price: this.price
        })
        this.succcessMessage = 'User created'
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
