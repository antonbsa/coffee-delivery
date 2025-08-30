import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <div className="actionsContainer">
        <span>
          <MapPin size={24} weight="fill" />
          Campo Bom, RS
        </span>

        <CartButton itemsCount={items.length}>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
