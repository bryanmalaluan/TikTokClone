import { TypedUseSelectorHook, useSelector } from "react-redux";

import { SelectorState } from "../types";

/**
 * Custom hook to access the redux store's state that is properly typed. This hook takes a selector function as an argument. The selector is called with the store state.
 *
 * This hook should be used for accessing redux store state
 * @returns the selected state
 */
const useAppSelector: TypedUseSelectorHook<SelectorState> = useSelector;

export default useAppSelector;
