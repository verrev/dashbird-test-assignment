import * as actionTypes from "actions/actionTypes";

export const getPrimaryLineData = () => ({
  type: actionTypes.GET_PRIMARY_LINE_DATA,
  payload: {
    request: {
      url: "/primary-line-data.json",
      method: "GET"
    }
  }
});

export const getPrimaryBarData = () => ({
  type: actionTypes.GET_PRIMARY_BAR_DATA,
  payload: {
    request: {
      url: "/primary-bar-data.json",
      method: "GET"
    }
  }
});
