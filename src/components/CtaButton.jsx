import { trackEvent } from '../lib/metaPixel'
import './CtaButton.css'

export default function CtaButton({
  href = '#',
  children,
  size = 'lg',
  variant = 'accent',
  location = 'cta',
}) {
  const external = /^https?:/i.test(href)
  const label = typeof children === 'string' ? children : 'CTA'

  // Fires only once a pixel ID is configured; a no-op until then.
  const handleClick = () =>
    trackEvent('Lead', { content_name: label, content_category: location })

  return (
    <a
      className={`cta cta--${size} cta--${variant}`}
      href={href}
      onClick={handleClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="cta__label">{children}</span>
      <span className="cta__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
