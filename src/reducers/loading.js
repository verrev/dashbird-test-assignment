import produce from "immer";
import initialState from "store/initialState";
import { ADD_LOADING_ITEM, REMOVE_LOADING_ITEM } from "actions/actionTypes";

export default produce((draft = initialState.loading, action) => {
  const stateDraft = draft;

  switch (action.type) {
    case ADD_LOADING_ITEM:
      stateDraft.current.push(action.payload);
      break;
    case REMOVE_LOADING_ITEM: {
      stateDraft.current = stateDraft.current.filter(
        (key) => key !== action.payload
      );
      break;
    }
    default:
  }

  return stateDraft;
});
