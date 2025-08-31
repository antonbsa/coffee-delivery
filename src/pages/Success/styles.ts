import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;

  h1 {
    font: ${({ theme }) => theme.fonts.titleL};
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  p {
    font: ${({ theme }) => theme.fonts.textL};
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  .content {
    display: flex;
    justify-content: space-between;

    .order-info {
      display: flex;
      flex-direction: column;
      gap: 32px;

      padding: 40px;
      margin-top: 40px;
      position: relative;
      width: 520px;

      background: ${({ theme }) => theme.colors.white};
      border-radius: 6px 36px;

      &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        background: linear-gradient(135deg, #dbac2c, #8047f8);
        border-radius: 6px 36px;
        z-index: -1;
      }

      .order-info-row {
        display: flex;
        align-items: center;
        gap: 12px;

        p {
          font: ${({ theme }) => theme.fonts.textM};
          color: ${({ theme }) => theme.colors.baseText};
        }

        .icon {
          display: flex;
          padding: 8px;

          color: white;
          border-radius: 50%;
        }
      }
    }
  }
`
