export default () => ({

  books: [],

  init () {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Alpine')
    .then(response => {
      if (!response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
      return response.json()
    })
    .then(response => {
      this.books = response.items.map(item => item.volumeInfo)
    })
  }
})