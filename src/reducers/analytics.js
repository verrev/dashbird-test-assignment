import produce from "immer";
import initialState from "store/initialState";
import * as actionTypes from "actions/actionTypes";

export default produce((draft = initialState.analytics, action) => {
  const stateDraft = draft;

  switch (action.type) {
    case actionTypes.PUT_PAYMENT_INTENT:
    case actionTypes.CANCEL_PAYMENT:
      stateDraft.chosenDeal = null;
      stateDraft.paymentClientSecret = null;
      break;
    case actionTypes.PUT_PAYMENT_INTENT_SUCCESS:
      stateDraft.chosenDeal = action.meta;
      stateDraft.paymentClientSecret = action.payload.data.clientSecret;
      break;
    case actionTypes.SET_PAYMENT_SUCCESS:
      stateDraft.paymentSucceeded = action.payload;
      break;
    default:
  }

  return stateDraft;
});
