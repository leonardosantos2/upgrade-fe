import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  p {
    color: ${({ theme }) => theme.colors.red};
    margin: 4px 0 0;
  }

  input {
    font-size: 1rem;
    padding: 12px 8px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coal};
    border-radius: ${({ theme }) => theme.border.radius.a};
    transition: 0.1s;
  }

  input:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  select {
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.coal};
    border-radius: ${({ theme }) => theme.border.radius.a};
    font-size: 1rem;
  }

  select:focus,
  select:active {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const InputFieldRow = styled.div`
  display: flex;
`;
