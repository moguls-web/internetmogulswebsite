const { createServer } = require('http') // Use HTTP instead of HTTPS for better performance
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare().then(() => {
  createServer((req, res) => {
    try {
      const parsedUrl = parse(req.url, true)

      // Redirects are handled by next.config.mjs redirects()

      // Add caching headers for static assets
      if (parsedUrl.pathname.startsWith('/_next/static/') ||
        parsedUrl.pathname.startsWith('/images/') ||
        parsedUrl.pathname.startsWith('/icons/') ||
        parsedUrl.pathname.startsWith('/logos/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      }

      // Handle the request normally
      handle(req, res, parsedUrl)
    } catch (error) {
      console.error('Error handling request:', error)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : 'production'}`)

  })
})
