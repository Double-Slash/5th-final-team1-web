import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeMarkDownTitle } from "@store/MarkDown/action";
import Textarea from "@common/Atoms/Textarea";

const TitleInput = () => {
  const dispatch = useDispatch();

  const changeTextarea = useCallback(
    (text: string) => {
      dispatch(changeMarkDownTitle(text));
    },
    [dispatch],
  );

  return (
    <>
      <Textarea onChange={changeTextarea} />
    </>
  );
};

export default TitleInput;
