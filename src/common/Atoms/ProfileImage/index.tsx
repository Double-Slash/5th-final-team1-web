import React, { useMemo } from "react";
import sliceUserName from "@utils/modules/sliceUserName";
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
  const sliced = useMemo(() => sliceUserName(imageSrc), [imageSrc]);

  return (
    <>
      <S.ProfileImage src={`https://avatars.githubusercontent.com/${sliced}`} radius={radius} alt="" />
    </>
  );
};

export default ProfileImage;
