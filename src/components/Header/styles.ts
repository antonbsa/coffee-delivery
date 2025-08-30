import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;

  .actionsContainer {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    span {
      display: flex;
      align-items: center;

      gap: 4px;
      padding: 8px;
      border-radius: 6px;

      background-color: ${({ theme }) => theme.colors.purpleLight};
      color: ${({ theme }) => theme.colors.purpleDark};

      svg {
        color: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`

export const CartButton = styled.button<{ itemsCount?: number }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.yellowLight};

  svg {
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  position: relative;

  &::after {
    content: '${({ itemsCount }) => itemsCount || ''}';
    display: ${({ itemsCount }) => (itemsCount ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.yellowDark};
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`
