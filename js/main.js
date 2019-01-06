
Vue.component('v-pagination', window['vue-plain-pagination'])
new Vue({
  el: '#app',
  data: {
    posts: [],
    limitationList:4,
  },
  created () {
    var vm = this
    axios.get('http://blog.nyeinchansu.me/api/posts')
      .then(function (response) {
        vm.posts = response.data
      })
  }
})


// new Vue({
//   el: '#app',
//   data () {
//     return {
//       // The resource variable
//       posts: [],
//       // Here you define the url of your paginated API
//       resource_url: 'http://blog.nyeinchansu.me/api/posts'
//     }
//   },
//   components: {
//     VPaginator: VuePaginator
//   },
//   methods: {
//     updateResource(data){
//       this.posts = data
//     }
//   }
// })



