export default () => ({

  posts: [],
  init () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
    .then(response => response.json())
    .then(json => {
      this.posts = json
    })
  }
})