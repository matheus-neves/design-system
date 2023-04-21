import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing box element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
