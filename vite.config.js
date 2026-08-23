import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * The Meta Pixel <noscript> beacon has to live in the static HTML — a
 * React-rendered <noscript> is inert (React can't populate it, and a visitor
 * with JS off never runs React at all). This plugin injects it at build time,
 * and only when a pixel ID is actually configured.
 */
function metaPixelNoscript(pixelId) {
  return {
    name: 'meta-pixel-noscript',
    transformIndexHtml() {
      if (!pixelId) return
      const src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`
      return [
        {
          tag: 'noscript',
          children: `<img height="1" width="1" style="display:none" alt="" src="${src}" />`,
          injectTo: 'body',
        },
      ]
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    plugins: [react(), metaPixelNoscript(env.VITE_META_PIXEL_ID)],
    server: { port: 5173, open: true },
  }
})
