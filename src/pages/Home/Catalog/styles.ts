import styled from 'styled-components'

export const CatalogContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 54px;

  .header {
    display: flex;
    justify-content: space-between;

    h2 {
      font: ${({ theme }) => theme.fonts.titleL};
    }

    .filters {
      display: flex;
      gap: 8px;

      button {
        display: inline-block;
        text-align: center;
        line-height: 1;
        align-self: flex-start;

        background-color: transparent;
        border: none;

        padding: 6px 12px;
        border-radius: 32px;

        cursor: pointer;

        font: ${({ theme }) => theme.fonts.tag};
        color: ${({ theme }) => theme.colors.yellowDark};
        outline: 1px solid ${({ theme }) => theme.colors.yellow};
        transition: background-color 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.yellowLight};
          transition: background-color 0.2s;
        }

        &.selected {
          background-color: ${({ theme }) => theme.colors.yellow};
          color: ${({ theme }) => theme.colors.white};
          outline: 1px solid ${({ theme }) => theme.colors.yellow};
        }

        &.selected:hover {
          background-color: ${({ theme }) => theme.colors.yellowDark};
          outline: 1px solid ${({ theme }) => theme.colors.yellowDark};
        }
      }
    }
  }

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
`
