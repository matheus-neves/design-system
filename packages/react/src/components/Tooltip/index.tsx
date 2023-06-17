import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'
import { ComponentProps } from 'react'
import { Text } from '../../index'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  align?: 'center' | 'end' | 'start'
  avoidCollisions?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  tooltipText: string
}

export function Tooltip({
  align = 'center',
  avoidCollisions = true,
  children,
  delayDuration = 200,
  side = 'top',
  sideOffset = 0,
  tooltipText,
  ...props
}: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <TooltipContainer delayDuration={delayDuration} {...props}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent
            align={align}
            avoidCollisions={avoidCollisions}
            side={side}
            sideOffset={sideOffset}
          >
            <TooltipArrow width={16} height={8} />
            <Text>{tooltipText}</Text>
          </TooltipContent>
        </RadixTooltip.Portal>
      </TooltipContainer>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
