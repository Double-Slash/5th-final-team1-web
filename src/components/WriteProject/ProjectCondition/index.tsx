import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Input from "@common/Atoms/Input";
import useInput from "@hooks/useInput";
import { changeCondition, changeDate, changeField, changeHeadcount } from "@store/WriteProject/action";
import * as S from "./style";

const WriteProject = () => {
  const dispatch = useDispatch();
  const [condition, setCondition] = useInput("");
  const [date, setDate] = useInput("");
  const [field, setField] = useInput("");
  const [headcount, setHeadcount] = useInput("");
  const mounted = useRef(false);

  // 모집 조건 작성
  useEffect(() => {
    if (!mounted.current) return;
    dispatch(changeCondition(condition));
  }, [dispatch, condition]);

  // 모집 기간 작성
  useEffect(() => {
    if (!mounted.current) return;
    dispatch(changeDate(date));
  }, [dispatch, date]);

  // 모집 분야 작성
  useEffect(() => {
    if (!mounted.current) return;
    dispatch(changeField(field));
  }, [dispatch, field]);

  // 모집 인원 작성
  useEffect(() => {
    if (!mounted.current) return;
    dispatch(changeHeadcount(headcount));
  }, [dispatch, headcount]);

  // componentDidUpdate only
  useEffect(() => {
    if (!mounted.current) mounted.current = true;
  }, []);

  return (
    <>
      <S.Layout>
        <S.Container>
          <div>
            <span>모집분야</span>
            <Input value={field} onChange={setField} placeholder="모집분야를 입력하세요" />
          </div>
          <div>
            <span>모집인원</span>
            <Input value={headcount} onChange={setHeadcount} placeholder="모집인원을 입력하세요" />
          </div>
        </S.Container>
        <S.Container>
          <div>
            <span>모집기간</span>
            <Input value={date} onChange={setDate} placeholder="모집기간을 입력하세요" />
          </div>
          <div>
            <span>모집조건</span>
            <Input value={condition} onChange={setCondition} placeholder="모집조건을 입력하세요" />
          </div>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default WriteProject;
