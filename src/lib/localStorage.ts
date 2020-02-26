interface ILocalStorageParams {
  key: string;
  value?: string | number | object | [];
}

export const setLocalStorageItem = ({
  ...params
}: ILocalStorageParams): void => {
  const value =
    typeof params.value !== 'string'
      ? JSON.stringify(params.value)
      : params.value;
  return window.localStorage.setItem(params.key, value);
};

export const getLocalStroageItem = ({
  ...params
}: ILocalStorageParams): void => {
  return JSON.parse(window.localStorage.getItem(params.key));
};

export const removeLocalStorageItem = ({
  ...params
}: ILocalStorageParams): void => {
  return window.localStorage.removeItem(params.key);
};
