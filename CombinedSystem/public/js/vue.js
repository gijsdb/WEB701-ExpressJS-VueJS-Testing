new Vue({
    el: '#app',
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
    }

});

Vue.component('logout', {
    template: '<div class="logout"> <a href="/logout"><button>Logout</button></a></div>'
})


