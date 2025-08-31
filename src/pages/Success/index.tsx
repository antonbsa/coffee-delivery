import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'
import { useTheme } from 'styled-components'
import { useLocation, Navigate } from 'react-router-dom'

import successIllustration from '../../assets/img/success-illustration.png'
import { OrderData } from '../../@types/order'

const paymentMethodLabels = {
  'credit-card': 'Cartão de Crédito',
  'debit-card': 'Cartão de Débito',
  money: 'Dinheiro',
}

export function Success() {
  const theme = useTheme()
  const location = useLocation()
  const orderData = location.state as OrderData

  // Redirect to home if no order data is available
  if (!orderData) {
    return <Navigate to="/" replace />
  }

  function upperCaseEveryFirstLetter(string: string) {
    return string
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="content">
        <div className="order-info">
          <div className="order-info-row">
            <div className="icon" style={{ background: theme.colors.purple }}>
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {upperCaseEveryFirstLetter(orderData.address.rua)},{' '}
                  {orderData.address.numero}
                </strong>
              </p>
              <p>
                {upperCaseEveryFirstLetter(orderData.address.bairro)} -{' '}
                {upperCaseEveryFirstLetter(orderData.address.cidade)},{' '}
                {orderData.address.uf.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="order-info-row">
            <div className="icon" style={{ background: theme.colors.yellow }}>
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="order-info-row">
            <div
              className="icon"
              style={{ background: theme.colors.yellowDark }}
            >
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethodLabels[orderData.paymentMethod]}</strong>
              </p>
            </div>
          </div>
        </div>
        <img src={successIllustration} alt="Ilustração de sucesso" />
      </div>
    </SuccessContainer>
  )
}
