import { brand } from '../data/content'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="page header__inner">
        <img className="header__logo" src="/smc-logo.png" alt={brand.name} width="755" height="250" />
      </div>
    </header>
  )
}
