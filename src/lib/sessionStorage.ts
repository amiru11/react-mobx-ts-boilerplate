interface ISessionStorageParams {
  key: string;
  value?: string | number | object | [];
}

export const setSessionStorageItem = ({
  ...params
}: ISessionStorageParams): void => {
  const value =
    typeof params.value !== 'string'
      ? JSON.stringify(params.value)
      : params.value;
  return window.sessionStorage.setItem(params.key, value);
};

export const getSessionStroageItem = ({
  ...params
}: ISessionStorageParams): void => {
  return JSON.parse(window.sessionStorage.getItem(params.key));
};

export const removeSessionStorageItem = ({
  ...params
}: ISessionStorageParams): void => {
  return window.sessionStorage.removeItem(params.key);
};
