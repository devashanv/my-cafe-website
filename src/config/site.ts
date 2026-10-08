const productionOrigin = 'https://my-cafe-website-two.vercel.app'

export const siteOrigin = (import.meta.env.VITE_SITE_ORIGIN || productionOrigin).replace(/\/$/, '')
