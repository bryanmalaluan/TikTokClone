import { MMKV } from "react-native-mmkv";

import { StorageKey } from "./types";

const storageKey: StorageKey = {
  user: "@storage-user",
};

const mmkv = new MMKV();

/** Stores item in local storage */
export const setItem = (key: keyof StorageKey, data: any) => {
  mmkv.set(storageKey[key], JSON.stringify(data));
};

/** Get item from local storage */
export const getItem = (key: keyof StorageKey) => {
  const data = mmkv.getString(storageKey[key]);
  return data ? JSON.parse(data) : null;
};
