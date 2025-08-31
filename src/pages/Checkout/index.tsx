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
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { getCoffeeImage } from '../../utils/getCoffeeImage'
import { priceOnlyFormatter } from '../../utils/formatter'
import { QuantityButton } from '../../components/QuantityButton'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { OrderData } from '../../@types/order'

const addressFormSchema = zod.object({
  cep: zod.string().min(8).max(8),
  rua: zod.string().min(3).max(100),
  numero: zod.string().min(1).max(10),
  complemento: zod.string().max(100).optional(),
  bairro: zod.string().min(3).max(100),
  cidade: zod.string().min(3).max(100),
  uf: zod.string().min(2).max(2),
  paymentMethod: zod.enum(['credit-card', 'debit-card', 'money']),
})

type AddressFormData = zod.infer<typeof addressFormSchema>

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { items, updateItemQuantity, removeItem, clearCart } =
    useContext(CartContext)

  const handleIncreaseQuantity = (itemId: number, currentQuantity: number) => {
    updateItemQuantity(itemId, currentQuantity + 1)
  }

  const handleDecreaseQuantity = (itemId: number, currentQuantity: number) => {
    updateItemQuantity(itemId, currentQuantity - 1)
  }

  const handleRemoveItem = (itemId: number) => {
    removeItem(itemId)
  }

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  })

  const {
    watch,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitted, errors },
  } = addressForm

  const selectedPayment = watch('paymentMethod')
  const complementoValue = watch('complemento')

  const handlePaymentMethodChange = (
    method: 'credit-card' | 'debit-card' | 'money',
  ) => {
    setValue('paymentMethod', method)
  }

  function onOrderConfirmed(data: AddressFormData) {
    const orderData: OrderData = {
      address: {
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
      },
      paymentMethod: data.paymentMethod,
    }

    clearCart()
    reset()
    navigate('/success', { state: orderData })
  }

  const totalItemsPrice = items.reduce(
    (total, item) => total + item.coffee.price * item.quantity,
    0,
  )
  const deliveryPrice = 3.5
  const totalPrice = totalItemsPrice + deliveryPrice

  return (
    <CheckoutContainer onSubmit={handleSubmit(onOrderConfirmed)} action="">
      <FormProvider {...addressForm}>
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
              <input
                className={`cep${isSubmitted && errors.cep ? ' error' : ''}`}
                type="number"
                placeholder="CEP"
                {...register('cep')}
              />
              <input
                className={`rua${isSubmitted && errors.rua ? ' error' : ''}`}
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />
              <input
                className={`numero${isSubmitted && errors.numero ? ' error' : ''}`}
                type="number"
                placeholder="Número"
                {...register('numero')}
              />
              <div className="complemento-container">
                <input
                  className={`complemento${isSubmitted && errors.complemento ? ' error' : ''}`}
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
                {!complementoValue && (
                  <span className="opcional-placeholder">Opcional</span>
                )}
              </div>
              <input
                className={`bairro${isSubmitted && errors.bairro ? ' error' : ''}`}
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <input
                className={`cidade${isSubmitted && errors.cidade ? ' error' : ''}`}
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <input
                className={`uf${isSubmitted && errors.uf ? ' error' : ''}`}
                type="text"
                placeholder="UF"
                {...register('uf')}
              />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="payment-method">
              <div className="buttons">
                <button
                  type="button"
                  className={
                    selectedPayment === 'credit-card' ? 'selected' : ''
                  }
                  onClick={() => handlePaymentMethodChange('credit-card')}
                >
                  <CreditCard size={16} color={theme.colors.purple} />
                  Cartão de Crédito
                </button>
                <button
                  type="button"
                  className={selectedPayment === 'debit-card' ? 'selected' : ''}
                  onClick={() => handlePaymentMethodChange('debit-card')}
                >
                  <Bank size={16} color={theme.colors.purple} />
                  Cartão de Débito
                </button>
                <button
                  type="button"
                  className={selectedPayment === 'money' ? 'selected' : ''}
                  onClick={() => handlePaymentMethodChange('money')}
                >
                  <Money size={16} color={theme.colors.purple} />
                  Dinheiro
                </button>
              </div>
              {errors.paymentMethod && !selectedPayment && (
                <span className="error-alert">
                  Selecione uma forma de pagamento
                </span>
              )}
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
              <button type="submit">Confirmar Pedido</button>
            </div>
          </div>
        </div>
      </FormProvider>
    </CheckoutContainer>
  )
}
