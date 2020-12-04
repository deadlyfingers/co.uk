/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'

it('Nav renders without crashing', () => {
  const div = document.createElement('div')
  const selected = (index: number): void => {}
  ReactDOM.render(<Nav selected={selected} selectedIndex={-1} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
