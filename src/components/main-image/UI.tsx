import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { ReactImageZoomer } from 'react-image-zoomer-ch'

const styles = StyleSheet.create({
  emptyBox: {
    padding: 8,
    border: '1px solid red',
    borderRadius: 4,
    boxSizing: 'border-box'
  }
})

export interface UIProps {
  imgUrl?: string
  zoomSize?: string
  pointerSize?: string
  widthContainer?: string
  alt?: string
  children?: JSX.Element
}

const UI: React.FC<UIProps> = ({
  imgUrl,
  zoomSize,
  pointerSize,
  widthContainer,
  alt
}) => {
  if (
    imgUrl === undefined ||
    zoomSize === undefined ||
    pointerSize === undefined ||
    widthContainer === undefined ||
    alt === undefined
  ) {
    return (
      <div className={css(styles.emptyBox)} data-testid='props-message'>
        You must pass in all necessary props: imgUrl, zoomSize, pointerSize,
        widthContainer
      </div>
    )
  }

  return (
    <div data-testid='image-zoomer' style={{ width: widthContainer }}>
      <ReactImageZoomer
        imgUrl={imgUrl}
        alt={alt}
        zoomSize={zoomSize}
        pointerSize={pointerSize}
      />
    </div>
  )
}

export default UI
