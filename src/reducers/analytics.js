import produce from "immer";
import initialState from "store/initialState";
import * as actionTypes from "actions/actionTypes";
import { getAverage } from "utils/helpers";

export default produce((draft = initialState.analytics, action) => {
  const stateDraft = draft;

  switch (action.type) {
    case actionTypes.GET_PRIMARY_LINE_DATA:
    case actionTypes.GET_PRIMARY_BAR_DATA:
      stateDraft.primaryBarData = [];
      stateDraft.primaryLineData = [];
      break;
    case actionTypes.GET_PRIMARY_BAR_DATA_SUCCESS:
      stateDraft.primaryBarData = action.payload.data.map((barDatum) =>
        barDatum.map(({ date, ...rest }) => ({
          date: new Date(date),
          ...rest
        }))
      );
      break;
    case actionTypes.GET_PRIMARY_LINE_DATA_SUCCESS: {
      stateDraft.averageValues = [
        `${parseInt(getAverage(action.payload.data[0]) * 1000, 10)}ms`,
        parseInt(getAverage(action.payload.data[1]) * 1000, 10),
        `${parseInt(getAverage(action.payload.data[2]) * 10, 10)}kb`,
        parseInt(getAverage(action.payload.data[3]) * 10, 10)
      ];
      stateDraft.primaryLineData = action.payload.data;
      break;
    }
    default:
  }

  return stateDraft;
});
