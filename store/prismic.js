export const state = () => ({
  settings: {},
  navigation: {}
})

export const mutations = {
  setSettings (state, settings) {
    state.settings = settings
  },
  setNavigation (state, navigation) {
    state.navigation = navigation
  }
}

export const actions = {
  async load (store) {
    const navigation = await this.$prismic.api.getSingle('navigation')
    const settings = await this.$prismic.api.getSingle('settings')
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
  }
}
