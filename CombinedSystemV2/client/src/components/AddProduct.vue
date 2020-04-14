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
                  <label>Weight</label><br>
                  <input type="number" v-model="weight" name="amount" placeholder="0(kg)"><br>
                  </div>
                  <div class="col">
                    <label>Bitterness</label><br>
                    <input type="number" v-model="bitterness" name="bitterness" placeholder="0 - 10"><br>
                    <label>Sweetness</label><br>
                    <input type="number" v-model="sweetness" name="sweetness" placeholder="0 - 10"><br>
                  </div>
                </div>
                <label>Price</label><br>
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
