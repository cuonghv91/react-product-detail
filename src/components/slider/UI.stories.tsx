import React from 'react'
import { Story, Meta } from '@storybook/react'
import UI, { UIProps, BackIcon, NextIcon } from './UI'

export default {
  component: UI,
  title: 'UI Slider',
  decorators: [
    (story: Story) => <div style={{ height: 100, width: 800 }}>{story()}</div>
  ]
} as Meta

const Template: Story<UIProps> = (args: UIProps) => <UI {...args} />

export const WithNoProps = Template.bind({})
WithNoProps.args = {}

export const WithImageList = Template.bind({})
WithImageList.args = {
  ...WithNoProps.args,
  imgList: [
    'https://i.ibb.co/KqjkdCy/ngoctrinh-zcdx.jpg',
    'https://i.ibb.co/4TSQWZv/a-1625281770421117289593.png',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/KqjkdCy/ngoctrinh-zcdx.jpg',
    'https://i.ibb.co/4TSQWZv/a-1625281770421117289593.png',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/KqjkdCy/ngoctrinh-zcdx.jpg',
    'https://i.ibb.co/4TSQWZv/a-1625281770421117289593.png',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg',
    'https://i.ibb.co/KqjkdCy/ngoctrinh-zcdx.jpg',
    'https://i.ibb.co/4TSQWZv/a-1625281770421117289593.png',
    'https://i.ibb.co/wgQTtvH/vu-khac-tiep-ngoc-trinh-05-1625383444-484-width503height797.jpg'
  ],
  height: '100%',
  nextNav: <NextIcon />,
  backNav: <BackIcon />
}
export const WithNoNav = Template.bind({})
WithNoNav.args = {
  ...WithImageList.args,
  isNavable: false
}
