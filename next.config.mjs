/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'standalone',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_ZOHO_WEBTOLEAD_URL:
      process.env.ZOHO_WEBTOLEAD_URL || 'https://crm.zoho.in/crm/WebToLeadForm',
    NEXT_PUBLIC_ZOHO_XNQSJSDP: process.env.ZOHO_XNQSJSDP || '',
    NEXT_PUBLIC_ZOHO_XMIWTLD: process.env.ZOHO_XMIWTLD || '',
    NEXT_PUBLIC_ZOHO_RETURN_URL:
      process.env.ZOHO_RETURN_URL || 'https://www.internetmoguls.com/thank-you',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/gallery.html', destination: '/', permanent: true,
        source: '/hotel.html', destination: '/', permanent: true,
        source: '/travel.html', destination: '/', permanent: true,
        source: '/index.html', destination: '/', permanent: true,
        source: '/index2.html', destination: '/', permanent: true,
        source: '/life-story.html', destination: '/', permanent: true,
        source: '/GRT-case-study.html', destination: '/case-studies', permanent: true,
        source: '/Grand-dragon-laddakh-case-study.html', destination: '/case-studies/grand-dragon-ladakh/', permanent: true,
        source: '/leisure-case-study.html', destination: '/case-studies/leisure-hotels/', permanent: true,
        source: '/offline.html', destination: '/work', permanent: true,
        source: '/online.html', destination: '/work', permanent: true,
        source: '/index2.html', destination: '/', permanent: true,
        source: '/digital.aspx', destination: '/digital', permanent: true,
        source: '/case-studies.html', destination: '/case-studies', permanent: true,
        source: '/client.html', destination: '/testimonials', permanent: true,
        source: '/GRT-case-study.html', destination: '/', permanent: true,
        source: '/Grand-dragon-laddakh-case-study.html', destination: '/', permanent: true,
        source: '/life-story.html', destination: '/', permanent: true,
        source: '/leisure-case-study.html', destination: '/case-studies/leisure-hotels/', permanent: true,
      },
    ]
  },
}

export default nextConfig
