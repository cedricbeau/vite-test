export default () => ({

  show: false,
  handleClick () {
    return this.show = ! this.show
  }
});