export const useSettings = () => {
  const { client } = usePrismic()
  return useAsyncData('$settings', () => client.getSingle('settings')).data
}