import { getAccessToken } from "@utils/modules/token";
import { defaultAxios, withTokenAxios } from "../index";

function hasAccessToken({ url }: { url: string }) {
  const token = getAccessToken({ key: "access" });
  if (token) {
    return withTokenAxios.get(url);
  }
  return defaultAxios.get(url);
}

export default hasAccessToken;
