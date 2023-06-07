import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  color: '$gray100',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
