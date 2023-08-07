import { RootState } from "../store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// custom hook to get data from Redux

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
