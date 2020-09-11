import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "components/Header";
import Body from "components/Body";
import {
  initialOverviewData,
  initialSortOrders,
  getSortedOverviewData
} from "utils/overviewData";

const RootContainer = () => {
  const loadingItems = useSelector(({ loading: { current } }) => current);
  const isVisible = loadingItems.length === 0;

  const [sortOrders, setSortOrders] = useState(initialSortOrders);
  const [overviewData, setOverviewData] = useState(initialOverviewData);

  const onOverviewSortClicked = (changedSwimlane) =>
    setSortOrders(
      sortOrders.map((order) =>
        order.title === changedSwimlane
          ? {
              ...order,
              ascending: !order.ascending
            }
          : order
      )
    );

  useEffect(() => {
    setOverviewData(
      getSortedOverviewData(initialOverviewData, overviewData, sortOrders)
    );
  }, [sortOrders]);

  return isVisible ? (
    <>
      <Header />
      <Body
        overviewData={overviewData}
        onOverviewSortClicked={onOverviewSortClicked}
      />
    </>
  ) : null;
};

export default RootContainer;
