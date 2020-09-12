import React from "react";
import { FormattedMessage } from "react-intl";
import { toastr } from "react-redux-toastr";

const ToastContents = ({ messageKey }) => (
  <FormattedMessage id={messageKey} tagName="span" />
);

const showToast = (messageKey, isError = false) => {
  const toastrFunction = isError ? toastr.error : toastr.success;
  toastrFunction("", {
    component: () => <ToastContents messageKey={messageKey} />,
  });
};

export default showToast;
