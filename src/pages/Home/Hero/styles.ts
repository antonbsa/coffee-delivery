import styled from 'styled-components'

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 92px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 98vw;
    height: 100%;
    background-image: url('/src/assets/img/hero-background.png');
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 30%,
      black 70%,
      transparent 100%
    );
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .title {
    margin-bottom: 66px;

    h1 {
      font: ${({ theme }) => theme.fonts.titleXl};
      color: ${({ theme }) => theme.colors.baseTitle};
      margin-bottom: 16px;
    }

    h2 {
      font: ${({ theme }) => theme.fonts.textL};
      color: ${({ theme }) => theme.colors.baseSubtitle};
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
      font: ${({ theme }) => theme.fonts.textM};
      color: ${({ theme }) => theme.colors.baseText};

      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 10px;
      }

      p {
        font: ${({ theme }) => theme.fonts.textM};
        color: ${({ theme }) => theme.colors.baseText};
      }
    }
  }

  img {
    width: 480px;
  }
`
