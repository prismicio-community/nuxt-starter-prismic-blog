export const useSettings = () => {
  const prismic = usePrismic()
  return useAsyncData('$settings', () => prismic.client.getSingle('settings')).data
}