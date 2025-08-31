import styled from 'styled-components'

export const QuantityButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  gap: 4px;
  padding: 8px;

  > span {
    color: ${(props) => props.theme.colors.baseTitle};
    font-size: 1rem;
    line-height: 1.3;
    padding: 0 4px;
    user-select: none;
  }

  > button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    line-height: 0;
    transition: color 0.1s;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.colors.purpleDark};
    }
  }
`
