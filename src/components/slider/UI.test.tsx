import React from 'react'
import UI from './UI'
import { render, screen } from '@testing-library/react'

describe('Slider UI component with default props', () => {
  it('it should render nothing', () => {
    render(<UI />)
    const component = screen.queryByTestId('slider')
    expect(component).toBeNull()
  })
})

describe('Slider UI component with passed props', () => {
  const mockImageKist = [
    'https://i.ibb.co/KqjkdCy/ngoctrinh-zcdx.jpg',
    'https://i.ibb.co/4TSQWZv/a-1625281770421117289593.png',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg'
  ]

  it('should render all image', () => {
    render(<UI imgList={mockImageKist} />)
    const img = screen.queryAllByTestId('img')
    expect(img).toHaveLength(mockImageKist.length)
  })

  it('should have next and prev button', async () => {
    render(<UI imgList={mockImageKist} />)
    const nextBtn = await screen.queryByTestId('next-btn')
    const backBtn = await screen.queryByTestId('back-btn')
    expect(nextBtn).not.toBeNull()
    expect(backBtn).not.toBeNull()
  })

  it('should hide the nav when props navable is false', async () => {
    render(<UI imgList={mockImageKist} isNavable={false} />)
    const nextBtn = await screen.queryByTestId('next-btn')
    const backBtn = await screen.queryByTestId('back-btn')
    const ImgList = await screen.queryByTestId('img-list')
    expect(nextBtn).toBeNull()
    expect(backBtn).toBeNull()
  })
})
