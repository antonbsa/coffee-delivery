export interface OrderData {
  address: {
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
  }
  paymentMethod: 'credit-card' | 'debit-card' | 'money'
}
