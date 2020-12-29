import styled from "styled-components";

interface ProfileImageProps {
  radius: number;
}

export const ProfileImage = styled.img<ProfileImageProps>`
  width: ${(props) => `${props.radius}px`};
  height: ${(props) => `${props.radius}px`};
  border-radius: 50%;
`;
