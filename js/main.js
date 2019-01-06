
new Vue({
  el: '#app',
  data: {
    posts: [],
    limitationList:5,
  },
  created () {
    var vm = this
    axios.get('http://blog.nyeinchansu.me/api/posts')
      .then(function (response) {
        vm.posts = response.data
      })
  }
})



