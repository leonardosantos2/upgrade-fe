import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  p {
    color: ${({ theme }) => theme.colors.red};
    margin: 4px 0 0;
  }
`;

export const InputFieldRow = styled.div`
  display: flex;
`;
