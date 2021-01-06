import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";
import { getGithubLogin } from "@apis/auth";
import { setAccessToken, setRefreshToken } from "@utils/modules/token";

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    const getToken = async () => {
      const { code, state } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      if (!code) history.push("/");
      const retypedCode = code as string;
      const retypedState = state as string;
      const { data } = await getGithubLogin({ code: retypedCode, state: retypedState });
      setAccessToken({ key: "access", value: data.access });
      setRefreshToken({ key: "refresh", value: data.refresh, exp: 10 });
      history.push("/");
    };
    getToken();
  }, [history]);

  return null;
};

export default Callback;
