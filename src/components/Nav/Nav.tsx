import React, { useState } from 'react'
import './Nav.scss'
import Deadlyfingers from '../../svgs/deadlyfingers.svg'
import imageCategories from '../../generated'

interface NavProps {
  selected: (index: number) => void
  selectedIndex: number
}

const Nav: React.FunctionComponent<NavProps> = (props: NavProps) => {
  const [isActive, setIsActive] = useState(false)
  const keys = Object.keys(imageCategories)
  // Format folder name into category label
  const labels = keys.map(key =>
    key
      .substring(key.indexOf('-') + 1)
      .replace(/-/g, ' ')
      .replace(/\sand\s/gi, ' & '),
  )
  const active = isActive ? 'active' : ''
  const isTouch = (): boolean => 'ontouchstart' in window || navigator.msMaxTouchPoints > 0
  const { selectedIndex } = props
  return (
    <nav className="Nav">
      <div data-menu="main" className={active}>
        {isTouch() ? (
          <button onClick={(): void => setIsActive(!active)} type="button">
            <img src={Deadlyfingers} className="icon" alt="Design" />
          </button>
        ) : (
          <button onClick={(): void => setIsActive(!active)} onMouseEnter={(): void | null => setIsActive(true)} type="button">
            <img src={Deadlyfingers} className="icon" alt="Design" />
          </button>
        )}
        <ul>
          {keys.map((key, i) => (
            <li key={key}>
              <button
                className={i === selectedIndex ? "selected" : ""}
                value={i}
                onClick={(e): void => {
                  setIsActive(false)
                  props.selected(parseInt((e.target as HTMLButtonElement).value, 10))
                }}
                type="button"
              >
                <h3>{labels[i]}</h3>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isActive ? (
        <button className="overlay" onClick={(): void => setIsActive(false)} type="button">
          <span>Close</span>
        </button>
      ) : null}
    </nav>
  )
}

export default Nav
