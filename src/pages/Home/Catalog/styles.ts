import styled from 'styled-components'

export const CatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 54px;

  .coffee-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    column-gap: 32px;
    justify-content: center;
    max-width: fit-content;
    margin: 0 auto;
    padding-bottom: 32px;

    @media (max-width: 1120px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 832px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 544px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  h2 {
    font: ${({ theme }) => theme.fonts.titleL};
  }
`
