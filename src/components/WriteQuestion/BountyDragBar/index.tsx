import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { WriteQuestionContext } from "@store/WriteQuestion";
import { changeDragBarGauge } from "@store/WriteQuestion/action";
import * as S from "./style";

const BuountyDragBar = () => {
  const { dispatch } = useContext(WriteQuestionContext);
  const barRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const debounced = useRef(
    debounce((newValue: number) => {
      dispatch(changeDragBarGauge(newValue));
    }, 1000),
  );
  const [coordRatio, setCoordRatio] = useState(10);

  // 드래그 바 상태 갱신
  const setDragBarStatus = useCallback((event: MouseEvent) => {
    if (!buttonRef.current || !barRef.current) return;
    const barWidth = barRef.current.clientWidth;
    const { clientX } = event;

    const ratio = Math.floor(((clientX - barRef.current.getBoundingClientRect().left) / barWidth) * 100);
    if (ratio < 0 || ratio > 100) return;

    if (ratio < 10) setCoordRatio(10);
    else if (ratio < 20) setCoordRatio(20);
    else if (ratio < 20) setCoordRatio(20);
    else if (ratio < 30) setCoordRatio(30);
    else if (ratio < 40) setCoordRatio(40);
    else if (ratio < 50) setCoordRatio(50);
    else if (ratio < 60) setCoordRatio(60);
    else if (ratio < 70) setCoordRatio(70);
    else if (ratio < 80) setCoordRatio(80);
    else if (ratio < 90) setCoordRatio(90);
    else setCoordRatio(100);
  }, []);

  // 버튼 mouse down
  const mouseDownButton = useCallback(() => {
    document.addEventListener("mousemove", setDragBarStatus);
  }, [setDragBarStatus]);

  // mouseup 때 mousemove 이벤트 종료
  useEffect(() => {
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", setDragBarStatus);
    });
  }, [setDragBarStatus]);

  useEffect(() => {
    debounced.current(coordRatio);
  }, [coordRatio]);

  return (
    <>
      <S.Layout>
        <p>채택 점수</p>
        <S.Bar ref={barRef}>
          <S.Gauge ratio={coordRatio} />
          <S.Button ref={buttonRef} ratio={coordRatio} onMouseDown={mouseDownButton} />
        </S.Bar>
        <S.Bounty>{coordRatio}pt</S.Bounty>
      </S.Layout>
    </>
  );
};

export default BuountyDragBar;
