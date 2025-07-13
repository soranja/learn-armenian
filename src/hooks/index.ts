import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { selectActions } from "../store/slices/select";
import { RootState } from "../store";

// export every slice here
const actions = { ...selectActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

// custom hook to get data from Redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
