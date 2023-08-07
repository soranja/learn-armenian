import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { selectActions } from "../store/slices/select";

// export every slice here
const actions = {
  ...selectActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
