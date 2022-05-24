export default (defaultOpen) => ({

  isOpen: defaultOpen,

  openModal() {
    this.isOpen = true;
  },

  closeModal() {
    this.isOpen = false;
  },

  isClosed(close) {
    return close === this.isOpen;
  }
});