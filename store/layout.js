export const state = () => ({
  withHeaderProfile: false,
  withHeaderDivider: false,
  withFooterSignUpForm: false
})

export const mutations = {
  setWithHeaderProfile (state, withHeaderProfile) {
    state.withHeaderProfile = withHeaderProfile
  },
  setWithHeaderDivider (state, withHeaderDivider) {
    state.withHeaderDivider = withHeaderDivider
  },
  setWithFooterSignUpForm (state, withFooterSignUpForm) {
    state.withFooterSignUpForm = withFooterSignUpForm
  }
}
