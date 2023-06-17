import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui-khazaf/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    toastTitle: 'Appointment scheduled',
    toastDescription: 'Wednesday, June 24th at 6pm',
    duration: 10000,
    swipeDirection: 'right',
  },
  argTypes: {
    swipeDirection: {
      description:
        'The direction of the pointer swipe that should close the toast.',
      options: ['right', 'left', 'up', 'down'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
