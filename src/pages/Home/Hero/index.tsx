import { HeroContainer } from './styles'
import introImage from '../../../assets/img/intro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

function IntroItem({
  icon: Icon,
  text,
  backgroundColor,
}: {
  icon: React.ElementType
  text: string
  backgroundColor: string
}) {
  const theme = useTheme()

  return (
    <span className="intro-item">
      <span className="icon-wrapper" style={{ backgroundColor }}>
        <Icon size={24} weight="fill" color={theme.colors.white} />
      </span>
      <p>{text}</p>
    </span>
  )
}

export function Hero() {
  const theme = useTheme()

  const items = [
    {
      icon: ShoppingCart,
      text: 'Compra simples e segura',
      backgroundColor: theme.colors.yellowDark,
    },
    {
      icon: Package,
      text: 'Embalagem mantém o café intacto',
      backgroundColor: theme.colors.baseText,
    },
    {
      icon: Timer,
      text: 'Entrega rápida e rastreada',
      backgroundColor: theme.colors.yellow,
    },
    {
      icon: Coffee,
      text: 'O café chega fresquinho até você',
      backgroundColor: theme.colors.purple,
    },
  ]

  return (
    <HeroContainer>
      <div>
        <div className="title">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="items">
          {items.map((item, index) => (
            <IntroItem
              key={index}
              icon={item.icon}
              text={item.text}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </div>
      </div>

      <img src={introImage} alt="Imagem ilustrativa de café" />
    </HeroContainer>
  )
}
