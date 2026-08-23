import { useEffect } from 'react'
import { initMetaPixel } from '../lib/metaPixel'

/**
 * Loads the Meta Pixel and fires PageView once VITE_META_PIXEL_ID is set;
 * renders nothing until then. The <noscript> beacon is injected into the
 * static HTML at build time instead — see metaPixelNoscript in vite.config.js.
 */
export default function MetaPixel() {
  useEffect(() => {
    initMetaPixel()
  }, [])

  return null
}
