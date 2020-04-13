<template>
  <div class="container padTop">
    <div class="row">
          <div class="col">
            <form class="AddHops">
              <h1>Add new hops</h1>
              <label>Variety</label>
              <input type="text" v-model="variety" name="variety" placeholder="variety"><br>
              <label>Weight</label>
              <input type="number" v-model="weight" name="amount" placeholder="0(kg)"><br>
              <label>Bitterness</label>
              <input type="number" v-model="bitterness" name="bitterness" placeholder="0 - 10"><br>
              <label>Sweetness</label>
              <input type="number" v-model="sweetness" name="sweetness" placeholder="0 - 10"><br>
              <label>Price</label>
              <input type="number" v-model="price" name="price" placeholder="0 Dollars"><br>
              <button @click="addHop">Add hop</button><br>
            <div class="error" v-html="error"/><br>
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
      userId: this.$store.state.user.email,
      error: null
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
</style>
