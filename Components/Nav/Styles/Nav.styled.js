import styled from "styled-components";

export const NavStyle = styled.div`
  .navbar {
    width: ${({winWidth}) => winWidth + "px"};
    .username{
        left: ${({winWidth}) => ((winWidth/2)-100) + "px"}
      }
  }
`;
