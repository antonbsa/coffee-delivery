import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;

  padding-top: 40px;

  h2 {
    font: ${({ theme }) => theme.fonts.titleXs};
    color: ${({ theme }) => theme.colors.baseSubtitle};
    margin-bottom: 15px;
  }

  .card {
    width: 100%;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.baseCard};
    border-radius: 6px;

    .header {
      display: flex;
      flex-direction: row;
      gap: 8px;

      h3 {
        font: ${({ theme }) => theme.fonts.textM};
        color: ${({ theme }) => theme.colors.baseSubtitle};
      }

      p {
        font: ${({ theme }) => theme.fonts.textS};
        color: ${({ theme }) => theme.colors.baseText};
      }
    }

    .address-form {
      display: grid;
      grid-template-columns: 200px 1fr 200px 1fr 60px;
      grid-template-rows: auto auto auto;
      grid-row-gap: 12px;
      gap: 16px;
      max-width: 560px;
      padding-top: 32px;

      .cep {
        grid-column: 1 / 2;
      }

      .rua {
        grid-column: 1 / -1;
      }

      .numero {
        grid-column: 1 / 2;
      }

      .complemento {
        grid-column: 2 / -1;
      }

      .complemento-container {
        grid-column: 2 / -1;
        position: relative;

        .opcional-placeholder {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font:
            0.75rem/1.3 'Roboto',
            sans-serif;
          color: ${({ theme }) => theme.colors.baseLabel};
          font-style: italic;
          pointer-events: none;
          background-color: ${({ theme }) => theme.colors.baseInput};
        }

        input {
          width: 100%;
        }
      }

      .bairro {
        grid-column: 1 / 2;
      }

      .cidade {
        grid-column: 2 / -2;
      }

      .uf {
        grid-column: -2 / -1;
      }

      input {
        border: none;
        padding: 12px;
        border-radius: 4px;
        outline: 1px solid ${({ theme }) => theme.colors.baseButton};
        background-color: ${({ theme }) => theme.colors.baseInput};

        font: ${({ theme }) => theme.fonts.textS};
        color: ${({ theme }) => theme.colors.baseText};

        transition: outline 0.2s;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &[type='number'] {
          -moz-appearance: textfield;
          appearance: textfield;
        }

        &::placeholder {
          color: ${({ theme }) => theme.colors.baseLabel};
        }

        &:focus {
          outline: 1px solid ${({ theme }) => theme.colors.yellowDark};
          transition: outline 0.2s;
        }

        &.error {
          outline: 1px solid #e74c3c;
          background-color: rgba(231, 76, 60, 0.05);
        }
      }
    }

    .payment-method {
      padding-top: 32px;

      .buttons {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex: 1;

        button {
          display: flex;
          align-items: center;
          justify-content: start;
          width: 100%;

          padding: 16px;
          border-radius: 6px;
          gap: 12px;
          border: 1px solid transparent;

          cursor: pointer;

          font: ${({ theme }) => theme.fonts.buttonM};
          color: ${({ theme }) => theme.colors.baseText};
          background-color: ${({ theme }) => theme.colors.baseButton};

          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.baseHover};
            transition: all 0.2s;
          }

          &.selected {
            background-color: ${({ theme }) => theme.colors.purpleLight};
            border: 1px solid ${({ theme }) => theme.colors.purple};
          }
        }
      }

      .error-alert {
        display: block;
        color: red;
        font-size: 12px;
        height: 16px;
        margin-top: 8px;
        margin-bottom: -24px;
      }
    }
  }

  .coffee-card {
    border-radius: 6px 36px !important;
    width: 448px;
  }

  .coffee-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 8px 4px;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.baseButton};
      padding-bottom: 24px;
      margin-bottom: 24px;
    }

    img {
      border-radius: 4px;
    }

    .coffee-info {
      flex: 1;

      h3 {
        font: ${({ theme }) => theme.fonts.textM};
        color: ${({ theme }) => theme.colors.baseSubtitle};
        margin-bottom: 8px;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;

        .remove-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          border: 0;
          border-radius: 6px;
          background: ${({ theme }) => theme.colors.baseButton};
          color: ${({ theme }) => theme.colors.baseText};
          font: ${({ theme }) => theme.fonts.buttonM};
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.1s;

          &:hover {
            background: ${({ theme }) => theme.colors.baseHover};
            transition: background-color 0.1s;
          }

          svg {
            color: ${({ theme }) => theme.colors.purple};
          }
        }
      }
    }

    .price {
      font: ${({ theme }) => theme.fonts.textM};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.baseText};
    }
  }

  .divider {
    height: 1px;
    background: ${({ theme }) => theme.colors.baseButton};
    margin: 24px 0;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 12px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font: ${({ theme }) => theme.fonts.textS};
        color: ${({ theme }) => theme.colors.baseText};
      }

      p {
        font: ${({ theme }) => theme.fonts.textM};
        color: ${({ theme }) => theme.colors.baseText};
      }

      &:last-of-type {
        span,
        p {
          font: ${({ theme }) => theme.fonts.textL};
          font-weight: bold;
          color: ${({ theme }) => theme.colors.baseSubtitle};
        }
      }
    }

    button {
      margin-top: 12px;
      padding: 12px;
      border: 0;
      border-radius: 6px;
      background: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.white};
      font: ${({ theme }) => theme.fonts.buttonG};
      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.1s;

      &:hover {
        background: ${({ theme }) => theme.colors.yellowDark};
        transition: background-color 0.2s;
      }
    }
  }
`
