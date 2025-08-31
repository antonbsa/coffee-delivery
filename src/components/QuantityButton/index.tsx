import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './styles'

interface QuantityButtonProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  disabled?: boolean
}

export function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
  disabled = false,
}: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button disabled={quantity === 1 || disabled} onClick={onDecrease}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>
      <button disabled={disabled} onClick={onIncrease}>
        <Plus weight="bold" size={14} />
      </button>
    </QuantityButtonContainer>
  )
}
