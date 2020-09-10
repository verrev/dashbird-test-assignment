import React from "react";
import { useSelector } from "react-redux";
import Header from "components/Header";

const RootContainer = () => {
  const loadingItems = useSelector(({ loading: { current } }) => current);
  const isVisible = loadingItems.length === 0;

  return isVisible ? <Header /> : null;
};

export default RootContainer;
