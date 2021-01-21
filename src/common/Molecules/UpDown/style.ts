import styled from "styled-components";

interface LayoutProps {
  is_liked: "None" | boolean;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  color: gray;
  .login-check {
    margin-right: 16px;
  }
  .like {
    margin-right: 4px;
    color: ${(props) => (props.is_liked === true ? "#266ce6" : "#a3a3a3")};
  }
  .dislike {
    margin-right: 4px;
    color: ${(props) => (props.is_liked === false ? "#266ce6" : "#a3a3a3")};
  }
`;
