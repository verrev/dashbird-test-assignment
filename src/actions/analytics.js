import * as actionTypes from "actions/actionTypes";

export const putCreatePaymentIntent = (deal, offerId) => ({
  type: actionTypes.PUT_PAYMENT_INTENT,
  payload: {
    request: {
      url: `/payments`,
      method: "PUT",
      data: {
        dealId: deal.id,
        offerId
      }
    }
  },
  meta: deal
});

export const cancelPayment = () => ({
  type: actionTypes.CANCEL_PAYMENT
});

export const setPaymentSuccess = (paymentSucceeded) => ({
  type: actionTypes.SET_PAYMENT_SUCCESS,
  payload: paymentSucceeded
});
