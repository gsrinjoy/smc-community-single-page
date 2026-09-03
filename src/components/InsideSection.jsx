import { inside } from '../data/content'
import CtaButton from './CtaButton'
import './InsideSection.css'

export default function InsideSection() {
  return (
    <section className="inside page" id="join">
      <hr className="rule" />

      <h2 className="inside__title">{inside.title}</h2>

      <ul className="inside__list">
        {inside.items.map((item) => (
          <li className="inside__item" key={item}>
            <span className="inside__diamond" aria-hidden="true">
              ◆
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="inside__kicker">{inside.ctaKicker}</p>

      <div className="inside__cta">
        <CtaButton href={inside.cta.href} size="sm" variant={inside.cta.variant} location="inside">
          {inside.cta.label}
        </CtaButton>
      </div>
    </section>
  )
}
