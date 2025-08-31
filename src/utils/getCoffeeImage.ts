export const getCoffeeImage = (imageName: string) => {
  return new URL(`../assets/img/coffees/${imageName}`, import.meta.url).href
}
