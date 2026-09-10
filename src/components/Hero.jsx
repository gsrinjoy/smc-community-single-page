import { hero } from '../data/content'
import CtaButton from './CtaButton'
import StarRating from './StarRating'
import MicroStrip from './MicroStrip'
import HeroVideo from './HeroVideo'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero page">
      <h1 className="hero__headline">
        {hero.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>

      <p className="hero__sub">
        {hero.subhead.map((part, i) =>
          part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>
        )}
      </p>

      <div className="hero__cta">
        <CtaButton href={hero.cta.href} variant={hero.cta.variant} location="hero">{hero.cta.label}</CtaButton>
      </div>

      <StarRating {...hero.rating} />
      <MicroStrip>{hero.strip}</MicroStrip>

      <HeroVideo label={hero.video.label} src={hero.video.src} />

      <div className="hero__videoCta">
        <CtaButton
          href={hero.video.cta.href}
          size="sm"
          variant={hero.video.cta.variant}
          location="video"
        >
          {hero.video.cta.label}
        </CtaButton>
      </div>

      <figure className="hero__diagram">
        <img
          src={hero.diagram.src}
          alt={hero.diagram.alt}
          width="1024"
          height="1225"
          loading="lazy"
        />
      </figure>
    </section>
  )
}
