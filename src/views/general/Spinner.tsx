import styled from "styled-components";

const Spinner = styled.div<{ width?: string; color?: string }>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${ ({ theme, color }) => color ? color : theme.colors.primary };
  border-radius: ${ ({ theme }) => theme.border.radius.half };
  width: ${ ({ width }) => width ? width : '50px' };
  height: ${ ({ width }) => width ? width : '50px' };
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export default Spinner;