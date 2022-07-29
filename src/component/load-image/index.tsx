import React, { useEffect } from 'react'

const defaultImage = new URL('./avatar.jpg', import.meta.url)

interface ImageProp {
  src: string
  defaultSrc?: string
  className?: string
}

export default function LoadImage(props: ImageProp) {
  const { src, defaultSrc = defaultImage.href, ...otherProps } = props
  const imgRef = React.useRef<HTMLImageElement>(null)
  useEffect(() => {
    const { current: imageDom } = imgRef
    if (imageDom) {
      const img: HTMLImageElement = new Image()
      img.onload = () => {
        imageDom.src = src
      }
      if (src) {
        img.src = src
      }
    }
  }, [src])
  return <img ref={imgRef} src={defaultSrc} {...otherProps} />
}
