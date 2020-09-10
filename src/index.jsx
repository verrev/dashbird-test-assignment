import React from "react";
import { render } from "react-dom";
import { Provider } from "react-intl-redux";
import ReduxToastr from "react-redux-toastr";
import store from "store";
import SpinnerContainer from "containers/SpinnerContainer";
import RootContainer from "containers/RootContainer";

const App = () => (
  <Provider store={store}>
    <>
      <ReduxToastr />
      <SpinnerContainer />
      <RootContainer />
    </>
  </Provider>
);

render(<App />, document.getElementById("root"));
