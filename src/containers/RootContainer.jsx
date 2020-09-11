import React from "react";
import { useSelector } from "react-redux";
import Header from "components/Header";
import Body from "components/Body";

const RootContainer = () => {
  const loadingItems = useSelector(({ loading: { current } }) => current);
  const isVisible = loadingItems.length === 0;

  return isVisible ? (
    <>
      <Header />
      <Body />
    </>
  ) : null;
};

export default RootContainer;
