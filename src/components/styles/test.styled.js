import styled from "styled-components";

export const StyledTest = styled.div`
  // background: grey;
  background: ${({ bg }) => bg};

  .title {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.header};
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  
`;
