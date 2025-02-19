import { SelectorState } from "../types";

/** Returns boolean if user is signed in */
export const getIsUserSignedIn = (state: SelectorState) => !!state.auth.user;
