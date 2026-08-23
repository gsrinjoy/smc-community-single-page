// Meta (Facebook) Pixel wiring.
//
// The pixel ID is NOT hardcoded — it comes from the VITE_META_PIXEL_ID env var,
// so the same build config works across staging/prod. Until that var is set,
// every function here is a no-op: nothing loads, nothing is sent to Meta.
//
// To go live: put the ID in .env.local (see .env.example) and rebuild.

export const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID ?? ''

export const isPixelEnabled = Boolean(PIXEL_ID)

let initialised = false

/** Injects fbevents.js and fires the initial PageView. Safe to call twice. */
export function initMetaPixel() {
  if (!isPixelEnabled || initialised || typeof window === 'undefined') return
  initialised = true

  /* eslint-disable */
  // Standard Meta bootstrap snippet — creates the fbq queue before the script lands.
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */

  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

/**
 * Fires a Meta standard event (e.g. 'Lead', 'Contact', 'ViewContent').
 * No-ops when the pixel is not configured, so callers never need to guard.
 */
export function trackEvent(name, params = {}) {
  if (!isPixelEnabled || typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', name, params)
}

/** Fires a custom (non-standard) event. Same no-op guarantee. */
export function trackCustom(name, params = {}) {
  if (!isPixelEnabled || typeof window === 'undefined' || !window.fbq) return
  window.fbq('trackCustom', name, params)
}
