import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <div className="actionsContainer">
        <span>
          <MapPin size={24} weight="fill" />
          Campo Bom, RS
        </span>
        <button>
          <ShoppingCart size={24} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
