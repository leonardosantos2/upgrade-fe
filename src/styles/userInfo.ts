import styled from 'styled-components';

export const StyledUnsortedList = styled.ul`
  margin: 0 0 16px;
  padding-left: 20px;

  li {
    text-decoration: none;
  }

  li:not(:last-child) {
    margin-bottom: 4px;
  }
`;
