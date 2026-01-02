export const useNavigation = () => {
  const { client } = usePrismic()
  return useAsyncData('$navigation', () => client.getSingle('navigation')).data
}