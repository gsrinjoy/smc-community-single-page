import { hero } from '../data/content'
import CtaButton from './CtaButton'
import StarRating from './StarRating'
import MicroStrip from './MicroStrip'
import FunFact from './FunFact'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero page">
      <span className="hero__emoji" role="img" aria-label="waving hand">
        {hero.emoji}
      </span>

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
      <FunFact label={hero.funFact.label}>{hero.funFact.body}</FunFact>

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
