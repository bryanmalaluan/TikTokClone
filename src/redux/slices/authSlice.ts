import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthSliceState } from "../types";

const initialState: AuthSliceState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<AuthSliceState["user"]>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserAction } = authSlice.actions;

export default authSlice.reducer;
