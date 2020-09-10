import React from "react";
import { useSelector } from "react-redux";
import Spinner from "components/Spinner";

const SpinnerContainer = () => {
  const loadingItems = useSelector(({ loading: { current } }) => current);
  const isVisible = loadingItems.length > 0;

  return isVisible ? <Spinner /> : null;
};

export default SpinnerContainer;
