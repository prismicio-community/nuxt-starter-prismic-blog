import { getMatchedComponents } from './utils.js'
import Middleware from './middleware'

const hasStaticAsyncData = (Component) => Boolean(Component.options.asyncData) && Component.options.static !== false

Middleware.nuxt_static = async ({ route, error }) => {
  // Ignore on server
  if (process.server) return
  // Ignore if not generated
  if (!process.static) return

  const Components = getMatchedComponents(route)
  Components.forEach(Component => {
    Component._payloads = Component._payloads || {}
    if (hasStaticAsyncData(Component)) {
      Component.options.asyncData = ({ route }) => Component._payloads[route.path.replace(/\/$/, '')]
    }
  })
  const path = route.path.replace(/\/$/, '')
  const needFetch = Components.some(Component => hasStaticAsyncData(Component) && !Component._payloads[path])
  if (!needFetch) {
    return
  }
  const payloadPath = (path + '/payload.json').replace(/\/+/, '/')
  const pageDatas = await fetch(payloadPath).then(res => {
    if (!res.ok) return null
    return res.json()
  })
  if (!pageDatas) {
    error({ statusCode: 404, message: 'Page not found' })
    console.error(`[@nuxt/static] Could not fetch ${payloadPath}`)
    return
  }

  Components.forEach((Component, index) => {
    if (hasStaticAsyncData(Component)) {
      Component._payloads[path] = pageDatas[index]
    }
  })
}
