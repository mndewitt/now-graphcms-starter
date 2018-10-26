const routes = require('next-routes')

module.exports = routes()
  .add('blog')
  .add('blog-post', 'blog/:slug', 'post')
