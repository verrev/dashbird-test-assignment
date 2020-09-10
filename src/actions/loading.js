import { ADD_LOADING_ITEM, REMOVE_LOADING_ITEM } from "actions/actionTypes";

export const addLoadingItem = (key) => ({
  type: ADD_LOADING_ITEM,
  payload: key,
});

export const removeLoadingItem = (key) => ({
  type: REMOVE_LOADING_ITEM,
  payload: key,
});
