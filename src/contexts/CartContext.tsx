import {
  createContext,
  ReactNode,
  useReducer,
  useCallback,
  useEffect,
} from 'react'
import { Coffee } from '../@types/coffee'

const CART_STORAGE_KEY = '@coffee-delivery:cart-1.0.0'

interface CartItem {
  coffee: Coffee
  quantity: number
}

function saveCartToLocalStorage(items: CartItem[]) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

function loadCartFromLocalStorage(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (storedCart) {
      return JSON.parse(storedCart)
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
  }
  return []
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: number) => void
  updateItemQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: number; quantity: number } }
  | { type: 'LOAD_CART'; payload: CartItem[] }
  | { type: 'CLEAR_CART' }

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
    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((item) => item.coffee.id !== itemId)
      }
      return state.map((item) =>
        item.coffee.id === itemId ? { ...item, quantity } : item,
      )
    }
    case 'LOAD_CART':
      return action.payload
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    const savedCart = loadCartFromLocalStorage()
    if (savedCart.length > 0) {
      dispatch({ type: 'LOAD_CART', payload: savedCart })
    }
  }, [])

  useEffect(() => {
    saveCartToLocalStorage(items)
  }, [items])

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }, [])

  const removeItem = useCallback((itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }, [])

  const updateItemQuantity = useCallback((itemId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
