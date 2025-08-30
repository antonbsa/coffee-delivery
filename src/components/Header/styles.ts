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

      background-color: ${({ theme }) => theme.colors.purpleLight};
      border-radius: 6px;

      svg {
        color: ${({ theme }) => theme.colors.purple};
      }
    }

    button {
      display: flex;
      align-items: center;

      padding: 8px;
      border-radius: 6px;
      border: none;
      background-color: ${({ theme }) => theme.colors.yellowLight};

      svg {
        color: ${({ theme }) => theme.colors.yellowDark};
      }
    }
  }
`
