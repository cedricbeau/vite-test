export default (defaultTab) => ({

  tab: defaultTab,

  toggleTab(e) {
    this.tab = e.target.dataset.target
  },

  isActive(tab) {
    return tab === this.tab
  }
});