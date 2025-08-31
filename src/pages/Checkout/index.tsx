import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { CheckoutContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { getCoffeeImage } from '../../utils/getCoffeeImage'
import { priceOnlyFormatter } from '../../utils/formatter'
import { QuantityButton } from '../../components/QuantityButton'

export function Checkout() {
  const theme = useTheme()
  const [selectedPayment, setSelectedPayment] = useState<string>('')
  const { items, updateItemQuantity, removeItem } = useContext(CartContext)

  const handleIncreaseQuantity = (itemId: number, currentQuantity: number) => {
    updateItemQuantity(itemId, currentQuantity + 1)
  }

  const handleDecreaseQuantity = (itemId: number, currentQuantity: number) => {
    updateItemQuantity(itemId, currentQuantity - 1)
  }

  const handleRemoveItem = (itemId: number) => {
    removeItem(itemId)
  }

  const totalItemsPrice = items.reduce(
    (total, item) => total + item.coffee.price * item.quantity,
    0,
  )
  const deliveryPrice = 3.5
  const totalPrice = totalItemsPrice + deliveryPrice

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <div className="card">
          <div className="header">
            <MapPinLine size={22} color={theme.colors.yellowDark} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className="content address-form">
            <input name="cep" className="cep" type="number" placeholder="CEP" />
            <input name="rua" className="rua" type="text" placeholder="Rua" />
            <input
              name="numero"
              className="numero"
              type="number"
              placeholder="Número"
            />
            <input
              name="complemento"
              className="complemento"
              type="text"
              placeholder="Complemento"
            />
            <input
              name="bairro"
              className="bairro"
              type="text"
              placeholder="Bairro"
            />
            <input
              name="cidade"
              className="cidade"
              type="text"
              placeholder="Cidade"
            />
            <input name="uf" className="uf" type="text" placeholder="UF" />
          </div>
        </div>
        <div
          className="card"
          style={{
            marginTop: '12px',
          }}
        >
          <div className="header">
            <CurrencyDollar size={22} color={theme.colors.purple} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="payment-method">
            <input type="hidden" name="payment" value={selectedPayment} />
            <div className="buttons">
              <button
                type="button"
                className={selectedPayment === 'credit-card' ? 'selected' : ''}
                onClick={() => setSelectedPayment('credit-card')}
              >
                <CreditCard size={16} color={theme.colors.purple} />
                Cartão de Crédito
              </button>
              <button
                type="button"
                className={selectedPayment === 'debit-card' ? 'selected' : ''}
                onClick={() => setSelectedPayment('debit-card')}
              >
                <Bank size={16} color={theme.colors.purple} />
                Cartão de Débito
              </button>
              <button
                type="button"
                className={selectedPayment === 'money' ? 'selected' : ''}
                onClick={() => setSelectedPayment('money')}
              >
                <Money size={16} color={theme.colors.purple} />
                Dinheiro
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <div className="card coffee-card">
          {items.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            items.map((item) => (
              <div key={item.coffee.id} className="coffee-item">
                <img
                  src={getCoffeeImage(item.coffee.image)}
                  width={64}
                  height={64}
                  alt={item.coffee.title}
                />
                <div className="coffee-info">
                  <h3>{item.coffee.title}</h3>
                  <div className="actions">
                    <QuantityButton
                      quantity={item.quantity}
                      onIncrease={() =>
                        handleIncreaseQuantity(item.coffee.id, item.quantity)
                      }
                      onDecrease={() =>
                        handleDecreaseQuantity(item.coffee.id, item.quantity)
                      }
                    />
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItem(item.coffee.id)}
                    >
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </div>
                <span className="price">
                  R$ {priceOnlyFormatter.format(item.coffee.price)}
                </span>
              </div>
            ))
          )}
          <div className="summary">
            <div>
              <span>Total de itens</span>
              <p>R$ {priceOnlyFormatter.format(totalItemsPrice)}</p>
            </div>
            <div>
              <span>Entrega</span>
              <p>R$ {priceOnlyFormatter.format(deliveryPrice)}</p>
            </div>
            <div>
              <span>Total</span>
              <p>R$ {priceOnlyFormatter.format(totalPrice)}</p>
            </div>
            <button>Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
