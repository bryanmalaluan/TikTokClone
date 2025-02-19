import authReducer from "./slices/authSlice";
import { store } from "./store";

export type AppDispatch = typeof store.dispatch;

export type SelectorState = {
  auth: ReturnType<typeof authReducer>;
};

export type AuthSliceState = {
  user: { firstName: string; lastName: string } | null;
};
