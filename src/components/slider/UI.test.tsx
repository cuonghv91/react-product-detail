import React from 'react'
import UI from './UI'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Slider UI component with default props or nothing passed as props', () => {
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
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg'
  ]

  it('should render all image', () => {
    render(<UI imgList={mockImageKist} />)
    const img = screen.queryAllByTestId('img')
    expect(img).toHaveLength(mockImageKist.length)
  })

  describe('When nav button inactive', () => {
    it('should hide the nav when props navable is false', async () => {
      render(<UI imgList={mockImageKist} isNavable={false} />)
      const nextBtn = await screen.queryByTestId('next-btn')
      const backBtn = await screen.queryByTestId('back-btn')
      expect(nextBtn).toBeNull()
      expect(backBtn).toBeNull()
    })
  })

  describe('When nav button active', () => {
    it('should have next and prev button', async () => {
      render(<UI imgList={mockImageKist} isNavable={true} />)
      const nextBtn = await screen.queryByTestId('next-btn')
      const backBtn = await screen.queryByTestId('back-btn')
      expect(nextBtn).not.toBeNull()
      expect(backBtn).not.toBeNull()
    })

    it('should have extra 4 images 2 one each side', async () => {
      render(<UI imgList={mockImageKist} isNavable={true} />)
      const imgs = await screen.queryAllByTestId('img')
      expect(imgs.length).toBe(mockImageKist.length + 4)
    })

    it('should have the first two image are the same as the last two image from origin image list', async () => {
      render(<UI imgList={mockImageKist} isNavable={true} />)
      const imgs = await screen.queryAllByTestId('img')
      expect(imgs[0].style.backgroundImage).toBe(
        `url(${mockImageKist[mockImageKist.length - 1]})`
      )
      expect(imgs[1].style.backgroundImage).toBe(
        `url(${mockImageKist[mockImageKist.length - 2]})`
      )
      expect(imgs[imgs.length - 1].style.backgroundImage).toBe(
        `url(${mockImageKist[0]})`
      )
      expect(imgs[imgs.length - 2].style.backgroundImage).toBe(
        `url(${mockImageKist[1]})`
      )
    })
  })
})
