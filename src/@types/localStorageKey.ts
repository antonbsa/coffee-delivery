import packageJson from '../../package.json'

const BASE_STORAGE_KEY = `@coffee-delivery`

function getStorageKey(key: string) {
  return `${BASE_STORAGE_KEY}:${key}-${packageJson.version}`
}

export const CART_STORAGE_KEY = getStorageKey('cart')
