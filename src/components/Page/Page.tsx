import React, { useState } from 'react'
import './Page.scss'
import imageCategories from '../../generated'
import Nav from '../Nav'
import Slideshow from '../Slideshow'

const Page: React.FunctionComponent = () => {
  const defaultCategory = imageCategories[Object.keys(imageCategories)[0]]

  const [index, setIndex] = useState(0)
  const [images, setImages] = useState(defaultCategory)

  const getImages = (newIndex: number): string[] => {
    const id = newIndex + 1
    const categoryKey = Object.keys(imageCategories).find(key => key.startsWith(`${id}`))
    if (categoryKey) {
      return imageCategories[categoryKey]
    }
    return defaultCategory
  }

  const selected = (newIndex: number): void => {
    setIndex(newIndex)
    setImages(getImages(newIndex))
  }

  return (
    <div className="Page">
      <Nav selected={selected} />
      <Slideshow id={index} images={images} />
    </div>
  )
}

export default Page
