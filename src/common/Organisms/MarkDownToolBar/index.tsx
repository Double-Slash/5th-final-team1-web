import React, { useCallback, useContext } from "react";
import { IconBaseProps } from "react-icons/lib";
import Button from "@common/Atoms/Button";
import { MarkDownEditorContext } from "@store/MarkDownEditor";
import { clickToolBar } from "@store/MarkDownEditor/action";
import * as S from "./style";
import data from "./data";

interface MarkDownToolBarProps {
  toolBarList: string[];
}

const MarkDownToolBar = ({ toolBarList }: MarkDownToolBarProps) => {
  const { dispatch } = useContext(MarkDownEditorContext);

  const onClickButton = useCallback(
    (toolBar: string) => {
      dispatch(clickToolBar(toolBar));
    },
    [dispatch],
  );

  return (
    <>
      <S.List>
        {toolBarList.map((toolBar) => {
          const buttonIcon = data.find((value) => value.type === toolBar);
          return (
            <li key={toolBar} className={toolBar}>
              <Button fontColor="black" isLinked={false} onClick={() => onClickButton(toolBar)}>
                {buttonIcon?.icon(buttonIcon.icon as IconBaseProps)}
              </Button>
            </li>
          );
        })}
      </S.List>
    </>
  );
};

export default MarkDownToolBar;
