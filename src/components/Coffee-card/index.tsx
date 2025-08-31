import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CardContainer } from './styles'
import { Coffee } from '../../@types/coffee'
import { priceOnlyFormatter } from '../../utils/formatter'
import { CartContext } from '../../contexts/CartContext'
import { QuantityButton } from '../QuantityButton'
import { getCoffeeImage } from '../../utils/getCoffeeImage'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  const handleAddToCart = () => {
    addItem({
      coffee,
      quantity,
    })
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity((state) => state + 1)
  }

  return (
    <CardContainer>
      <div className="content">
        <img
          src={getCoffeeImage(coffee.image)}
          width={120}
          height={120}
          alt={coffee.title}
        />
        <div className="tags">
          {coffee.tags.map((tag) => (
            <span key={tag} className="tag-item">
              {tag}
            </span>
          ))}
        </div>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </div>
      <div className="price-container">
        <p>
          R$ <span>{priceOnlyFormatter.format(coffee.price)}</span>
        </p>
        <div className="actions">
          <QuantityButton
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" color="white" size={22} />
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
