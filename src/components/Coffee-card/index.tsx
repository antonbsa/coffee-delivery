import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CardContainer } from './styles'
import { Coffee } from '../../@types/coffee'
import { priceOnlyFormatter } from '../../utils/formatter'

interface CoffeeCardProps {
  coffee: Coffee
}

const getCoffeeImage = (imageName: string) => {
  return new URL(`../../assets/img/coffees/${imageName}`, import.meta.url).href
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  const handleIncrease = () => {
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
          <div className="quantity-button">
            <button disabled={quantity === 1} onClick={handleDecrease}>
              <Minus weight="bold" size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>
              <Plus weight="bold" size={14} />
            </button>
          </div>
          <button>
            <ShoppingCartSimple weight="fill" color="white" size={22} />
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
