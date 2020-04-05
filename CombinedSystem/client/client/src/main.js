import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  data: {
    hops: []
  },

  created() {
      this.fetchData()
  },

  computed: {
    productChunks(){
      return _.chunk(Object.values(this.hops), 3);
    }
  },

  methods: {
      fetchData() {
          this.$http.get('http://localhost:7556/retrieve')
            .then(result => {
                console.log(result);
                this.hops = result.data
            })
      }
  },

  render: (h) => h(App),
}).$mount('#app');
