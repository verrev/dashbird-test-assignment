import * as actionTypes from "actions/actionTypes";
import axios from "config/axios";

const requestActionSuccessSuffix = "_SUCCESS";
const requestActionFailSuffix = "_FAIL";

export default (store) => (next) => (action) => {
  const { type, payload, afterSuccess, meta } = action;
  const { dispatch } = store;

  const isRequestFiringAction =
    typeof payload === "object" &&
    "request" in payload &&
    !type.includes(requestActionSuccessSuffix) &&
    !type.includes(requestActionFailSuffix);

  if (isRequestFiringAction) {
    dispatch({ type: actionTypes.ADD_LOADING_ITEM, payload: type });

    axios(payload.request)
      .then((response) => {
        dispatch({
          type: `${type}${requestActionSuccessSuffix}`,
          payload: response,
          meta
        });
        if (afterSuccess) {
          afterSuccess(dispatch, store.getState());
        }
      })
      .catch((error) => {
        dispatch({
          type: `${type}${requestActionFailSuffix}`,
          payload: error
        });
      })
      .finally(() =>
        dispatch({
          type: actionTypes.REMOVE_LOADING_ITEM,
          payload: type
        })
      );
  }

  return next(action);
};
