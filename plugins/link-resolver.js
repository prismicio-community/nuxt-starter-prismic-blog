/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'blog_home') {
    return '/'
  }

  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }

  return '/not-found'
}