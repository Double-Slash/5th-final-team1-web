import React from "react";
import * as S from "./style";

/**
 * @param imageSrc 이미지 값
 * @param radius 원형 반지름 길이
 */

export interface ProfileImageProps {
  imageSrc: string;
  radius?: number;
}

const ProfileImage = ({ radius = 40, imageSrc }: ProfileImageProps) => {
  return (
    <>
      <S.ProfileImage src={imageSrc} radius={radius} alt="" />
    </>
  );
};

export default ProfileImage;
