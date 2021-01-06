import { defaultAxios } from "./index";

export const getGithubLogin = ({ code, state }: { code: string; state: string }) => {
  return defaultAxios.get(`/accounts/github/login/callback/?code=${code}&state=${state}`);
};
