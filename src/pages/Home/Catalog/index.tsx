/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { CoffeeCard } from '../../../components/Coffee-card'
import { CatalogContainer } from './styles'
import { Coffee, CoffeeTag } from '../../../@types/coffee'

const coffeesCatalog: Coffee[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: 'expresso.png',
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: 'expresso-americano.png',
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL'],
    image: 'expresso-cremoso.png',
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['TRADICIONAL', 'GELADO'],
    image: 'expresso-gelado.png',
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: 'cafe-com-leite.png',
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: 'latte.png',
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: 'capuccino.png',
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: 'macchiato.png',
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    image: 'mocaccino.png',
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['ESPECIAL', 'COM LEITE'],
    image: 'chocolate-quente.png',
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    image: 'cubano.png',
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['ESPECIAL'],
    image: 'havaiano.png',
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['ESPECIAL'],
    image: 'arabe.png',
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    image: 'irlandes.png',
  },
]

// Get all unique coffee tags from the catalog
const getAllCoffeeTags = (): CoffeeTag[] => {
  const allTags = coffeesCatalog.flatMap((coffee) => coffee.tags)
  return [...new Set(allTags)] as CoffeeTag[]
}

export function Catalog() {
  const coffeeTags = getAllCoffeeTags()
  const [selectedFilters, setSelectedFilters] = useState<CoffeeTag[]>([])

  const handleFilterToggle = (tag: CoffeeTag) => {
    setSelectedFilters((prev) => {
      if (prev.includes(tag)) {
        // Remove filter if already selected
        return prev.filter((filter) => filter !== tag)
      } else {
        // Add filter if not selected
        return [...prev, tag]
      }
    })
  }

  // Filter coffees based on selected filters
  const filteredCoffees =
    selectedFilters.length === 0
      ? coffeesCatalog
      : coffeesCatalog.filter((coffee) =>
        selectedFilters.some((filter) => coffee.tags.includes(filter)),
      )

  return (
    <CatalogContainer>
      <div className="header">
        <h2>Nossos cafés</h2>
        <div className="filters">
          {coffeeTags.map((tag) => (
            <button
              key={tag}
              className={selectedFilters.includes(tag) ? 'selected' : ''}
              onClick={() => handleFilterToggle(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="coffee-list">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </CatalogContainer>
  )
}
