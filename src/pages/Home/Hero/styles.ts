import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 92px 0;

  .title {
    margin-bottom: 66px;

    h1 {
      font: ${({ theme }) => theme['title-xl']};
      color: ${({ theme }) => theme['base-title']};
      margin-bottom: 16px;
    }

    h2 {
      font: ${({ theme }) => theme['text-l']};
      color: ${({ theme }) => theme.subtitle};
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem; /* Adjust spacing between items */

    .intro-item {
      flex: 1 1 calc(50% - 1.5rem); /* Two items per row */
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-align: center;
      font: ${({ theme }) => theme['text-m']};
      color: ${({ theme }) => theme['base-text']};

      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 10px;
      }
    }
  }

  img {
    width: 480px;
  }
`
