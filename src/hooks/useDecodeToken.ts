import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getAccessToken } from "@utils/modules/token";

interface DecodeState {
  exp: number;
  jti: string;
  oauth_username: string;
  token_type: string;
  user_id: number;
}

const initialState = {
  exp: -1,
  jti: "",
  oauth_username: "",
  token_type: "",
  user_id: -1,
};

function useDecodeToken() {
  const [decode, setDecode] = useState<DecodeState>(initialState);

  useEffect(() => {
    const token = getAccessToken({ key: "access" });
    if (token) {
      const result = jwt_decode<DecodeState>(token);
      setDecode(result);
    }
  }, []);

  return decode;
}

export default useDecodeToken;
