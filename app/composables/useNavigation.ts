export const useNavigation = () => {
  const prismic = usePrismic()
  return useAsyncData('$navigation', () => prismic.client.getSingle('navigation')).data
}