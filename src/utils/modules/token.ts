interface SetToken {
  key: string;
  value: string;
}

interface SetCookie extends SetToken {
  exp: number;
}

function setAccessToken({ key, value }: SetToken) {
  window.sessionStorage.setItem(key, value);
}

function getAccessToken({ key }: { key: string }) {
  return window.sessionStorage.getItem(key);
}

function setRefreshToken({ key, value, exp }: SetCookie) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value};expires=${date.toUTCString()};path=/`;
}

function getRefreshToken({ value }: { value: string }) {
  const cookieValue = document.cookie.match(`(^|;) ?${value}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}

export { setAccessToken, getAccessToken, setRefreshToken, getRefreshToken };
