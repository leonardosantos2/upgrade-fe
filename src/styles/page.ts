import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { breakpoints } = theme;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.coalLight};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: ${({ theme }) => theme.border.radius.b};
`;

export const PageWrapper = styled(Card)`
  width: 80vw;
  max-width: 700px;
  margin: 56px auto auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: 100vw;
    border: none;
    margin: 0 auto auto;
  }

  h1 {
    text-align: center;
  }

  button {
    padding: 16px 32px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius.a};
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;
