import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui-khazaf/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    align: 'center',
    avoidCollisions: true,
    sideOffset: 0,
    tooltipText: 'Tooltip example',
  },
  argTypes: {
    align: {
      description:
        'The preferred alignment against the trigger. May change when collisions occur.',
      options: ['center', 'end', 'start'],
      control: {
        type: 'inline-radio',
      },
    },
    avoidCollisions: {
      description:
        'When true, overrides the side and align preferences to prevent collisions with boundary edges.',
    },
    children: {
      table: { disable: true },
    },
    side: {
      description:
        'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    sideOffset: {
      description: 'The distance in pixels from the trigger.',
      control: {
        type: 'number',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            backgroundColor: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button variant="primary">Example</Button>,
  },
}
