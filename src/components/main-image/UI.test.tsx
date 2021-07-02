import React from 'react'
import UI from './UI'
import { render, screen } from '@testing-library/react'

export const mockProps = {
  imgUrl: 'https://i.ibb.co/h1C0vFX/ngoc-trinh.jpg',
  zoomSize: '300px',
  pointerSize: '50px',
  widthContainer: '500px',
  alt: 'demo'
}

describe('MainImage UI component with default props', () => {
  it('it should render a message that inform user to pass in necessary props', () => {
    render(<UI />)
    const message = screen.queryByTestId('props-message')
    expect(message).not.toBeNull()
  })
})

describe('MainImage UI component with all necessary props provided', () => {
  it('should render component correctly', () => {
    render(<UI {...mockProps} />)
    const component = screen.queryByTestId('image-zoomer')
    expect(component).not.toBeNull()
  })
})
