export type CoffeeTag =
  | 'TRADICIONAL'
  | 'GELADO'
  | 'COM LEITE'
  | 'ESPECIAL'
  | 'ALCOÓLICO'

export interface Coffee {
  id: number
  title: string
  description: string
  price: number
  tags: CoffeeTag[]
  image: string
}
