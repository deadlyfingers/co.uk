import React, { CSSProperties } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
// import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
// import 'react-awesome-slider/dist/custom-animations/open-animation.css'
// import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
import './Slideshow.scss'

interface SlideshowProps {
  id: number
  images: string[]
}

const Slideshow: React.FunctionComponent<SlideshowProps> = (props: SlideshowProps) => {
  const { id, images } = props
  // single image
  if (images.length === 1) {
    const image = images[0]
    const style: CSSProperties = {
      backgroundImage: `url('${image}')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    }
    return <div key={id} style={style} className="Slideshow" />
  }
  // multiple images
  return (
    <div className="Slideshow">
      <AwesomeSlider key={id} bullets={false} fillParent animation="scaleOutAnimation">
        {images.map(image => (
          <div key={image} data-src={image} />
        ))}
      </AwesomeSlider>
    </div>
  )
}

export default Slideshow
