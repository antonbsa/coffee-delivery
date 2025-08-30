import { createContext, ReactNode, useReducer, useCallback } from 'react'
import { Coffee } from '../@types/coffee'

interface CartItem {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: number) => void
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { coffee, quantity } = action.payload
      const existingItemIndex = state.findIndex(
        (item) => item.coffee.id === coffee.id,
      )

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...state]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return updatedItems
      } else {
        return [...state, action.payload]
      }
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.coffee.id !== action.payload)
    default:
      return state
  }
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }, [])

  const removeItem = useCallback((itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
