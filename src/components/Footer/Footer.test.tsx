/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

it('Footer renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer />, div)
  ReactDOM.unmountComponentAtNode(div)
})