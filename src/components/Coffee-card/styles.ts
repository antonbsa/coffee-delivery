import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  max-width: 256px;
  height: 310px;

  background: ${({ theme }) => theme.colors.baseCard};
  border-radius: 6px 36px;
  padding: 20px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      margin-top: -40px;
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 4px;

      .tag-item {
        display: inline-block;
        text-align: center;

        margin-top: 16px;
        padding: 4px 8px;
        border-radius: 16px;

        background-color: ${({ theme }) => theme.colors.yellowLight};
        color: ${({ theme }) => theme.colors.yellowDark};
        font: ${({ theme }) => theme.fonts.tag};
      }
    }

    h3 {
      margin-top: 16px;
      font: ${({ theme }) => theme.fonts.titleS};
      color: ${({ theme }) => theme.colors.baseSubtitle};
      text-align: center;
    }

    p {
      margin-top: 8px;
      text-align: center;
      font: ${({ theme }) => theme.fonts.textS};
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }

  .price-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    p {
      font: ${({ theme }) => theme.fonts.textS};
      color: ${({ theme }) => theme.colors.baseText};

      span {
        font: ${({ theme }) => theme.fonts.titleM};
        color: ${({ theme }) => theme.colors.baseText};
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 8px;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        padding: 8px;
        border-radius: 6px;

        background-color: ${({ theme }) => theme.colors.purpleDark};
        color: ${({ theme }) => theme.colors.baseCard};

        transition: background-color 0.2s;

        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.purple};
          transition: background-color 0.2s;
        }
      }
    }
  }
`
