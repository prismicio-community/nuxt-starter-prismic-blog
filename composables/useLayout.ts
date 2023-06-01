export const useLayout = () => {
  const withHeaderProfile = useState(() => false)
  const withHeaderDivider = useState(() => false)
  const withFooterSignUpForm = useState(() => false)

  return {
    withHeaderProfile,
    withHeaderDivider,
    withFooterSignUpForm
  }
}