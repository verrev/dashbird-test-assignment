import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { intlReducer } from "react-intl-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import initialState from "store/initialState";
import loadingReducer from "reducers/loading";
import analyticsReducer from "reducers/analytics";
import requestMiddleware from "middlewares/request";

const reducer = combineReducers({
  intl: intlReducer,
  toastr: toastrReducer,
  loading: loadingReducer,
  analytics: analyticsReducer
});

const composeMiddlewares =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  initialState,
  composeMiddlewares(applyMiddleware(requestMiddleware))
);
