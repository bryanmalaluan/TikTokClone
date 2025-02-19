import { useDispatch } from "react-redux";

import { AppDispatch } from "../types";

/**
 * Custom hook that returns the dispatch function from the Redux store with specific type
 *
 * This hook should be used for dispatching redux actions
 * @returns The dispatch function from the Redux store.
 */
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
