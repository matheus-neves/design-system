import { styled, keyframes } from '../../styles'

import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = '25px'

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: VIEWPORT_PADDING,
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  fontFamily: 'Roboto',
  padding: '$4 $5',
  background: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gra600',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$1',

  "&[data-state='open']": {
    animation: `${slideIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&[data-state='closed']": {
    animation: `${swipeOut} 100ms ease-in`,
  },
  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  "&[data-swipe='end']": {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  marginTop: '$3',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  width: 24,
  height: 24,
  lineHeight: 0,
  cursor: 'pointer',
  alignSelf: 'flex-start',
})
