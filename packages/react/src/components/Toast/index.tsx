import { ComponentProps } from 'react'
import { colors } from '@ignite-ui-khazaf/tokens'
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

import { Root, ToastProvider, SwipeDirection } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof Root> {
  toastTitle: string
  toastDescription?: string
  swipeDirection?: SwipeDirection
}

export function Toast({
  swipeDirection = 'right',
  toastDescription,
  toastTitle,
  ...props
}: ToastProps) {
  return (
    <ToastProvider swipeDirection={swipeDirection}>
      <ToastRoot {...props}>
        <div>
          <ToastTitle>{toastTitle}</ToastTitle>
          {toastDescription && (
            <ToastDescription>{toastDescription}</ToastDescription>
          )}
        </div>
        <ToastClose>
          <X width={24} height={24} color={colors.gray200} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
