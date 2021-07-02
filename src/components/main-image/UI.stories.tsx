import React from 'react'
import { Story, Meta } from '@storybook/react'
import UI, { UIProps } from './UI'

export default {
  component: UI,
  title: 'UI MainImage',
  decorators: [(story: Story) => <div style={{ width: 800 }}>{story()}</div>]
} as Meta

const Template: Story<UIProps> = (args: UIProps) => <UI {...args} />

export const Empty = Template.bind({})
Empty.args = {}

export const Perfect = Empty.bind({})
Perfect.args = {
  ...Empty.args,
  imgUrl: 'https://i.ibb.co/h1C0vFX/ngoc-trinh.jpg',
  zoomSize: '300px',
  pointerSize: '50px',
  widthContainer: '500px',
  alt: 'demo'
}
