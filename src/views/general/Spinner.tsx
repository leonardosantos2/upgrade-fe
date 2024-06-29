import styled from "styled-components";

const Spinner = styled.div<{ width?: string }>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${ ({ theme }) => theme.colors.primary };
  border-radius: 50%;
  width: ${ ({ width }) => width ? width : '50px' };
  height: ${ ({ width }) => width ? width : '50px' };
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;