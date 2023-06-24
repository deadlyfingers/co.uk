import React from 'react'
import './Footer.scss'

interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <footer>
      <button>...</button>
      <ul>
        <li>
          <a href="https://www.deadlyfingers.com">Deadlyfingers</a>
        </li>
        <li>
          <a href="https://www.deadlyfingers.net">Dev Blog</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
