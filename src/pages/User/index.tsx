import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "@components/User/PageHeader";
import UserActivity from "@components/User/UserActivity";
import PostTabMenu from "@components/User/PostTabMenu";
import useDecodeToken from "@hooks/useDecodeToken";
import { getAccounts } from "@apis/auth";
import { IUserInfo } from "@typings/db";
import * as S from "./style";

const User = () => {
  const [userData, setUserData] = useState<IUserInfo | undefined>(undefined);
  const { oauth_username } = useDecodeToken();
  const history = useHistory();

  useLayoutEffect(() => {
    const callback = async () => {
      try {
        const { data } = await getAccounts();
        setUserData(data);
      } catch {
        history.goBack();
      }
    };
    callback();
  }, [history]);

  return (
    <>
      <PageHeader userName={oauth_username} />
      <S.Layout>
        <UserActivity
          answer_count={userData?.answer_count}
          comment_count={userData?.comment_count}
          jobposting_count={userData?.jobposting_count}
          question_count={userData?.question_count}
        />
        <PostTabMenu
          my_answers={userData?.my_answers}
          my_projects={userData?.my_projects}
          my_questions={userData?.my_questions}
        />
      </S.Layout>
    </>
  );
};

export default User;
