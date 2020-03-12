import React from 'react'
import ReactDOM from 'react-dom'
import Slide from './Slideshow'

it('Slide renders without crashing', () => {
  const div = document.createElement('div')
  const images = ['images/logo192.png']
  ReactDOM.render(<Slide id={0} images={images} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
