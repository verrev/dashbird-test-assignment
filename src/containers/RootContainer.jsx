import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "components/Header";
import Body from "components/Body";
import {
  initialOverviewData,
  initialSortOrders,
  getSortedOverviewData
} from "utils/overviewData";
import { getPrimaryLineData, getPrimaryBarData } from "actions/analytics";

const RootContainer = () => {
  const [sortOrders, setSortOrders] = useState(initialSortOrders);
  const [overviewData, setOverviewData] = useState(initialOverviewData);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrimaryLineData());
    dispatch(getPrimaryBarData());
  }, []);

  const onOverviewSortClicked = useCallback(
    (changedSwimlane) =>
      setSortOrders(
        sortOrders.map((order) =>
          order.title === changedSwimlane
            ? {
                ...order,
                ascending: !order.ascending
              }
            : order
        )
      ),
    [setSortOrders, sortOrders]
  );

  useEffect(() => {
    setOverviewData(
      getSortedOverviewData(initialOverviewData, overviewData, sortOrders)
    );
  }, [sortOrders]);

  const onTabClicked = useCallback(
    (tabIndex) => {
      setActiveTabIndex(tabIndex);
    },
    [setActiveTabIndex]
  );

  const {
    loadingItems,
    primaryLineData,
    primaryBarData,
    averageValues
  } = useSelector(({ analytics, loading }) => ({
    loadingItems: loading.current,
    primaryLineData: analytics.primaryLineData,
    primaryBarData: analytics.primaryBarData,
    averageValues: analytics.averageValues
  }));

  const isVisible = loadingItems.length === 0;

  return isVisible ? (
    <>
      <Header />
      <Body
        primaryBarData={primaryBarData}
        primaryLineData={primaryLineData}
        averageValues={averageValues}
        overviewData={overviewData}
        onOverviewSortClicked={onOverviewSortClicked}
        activeTabIndex={activeTabIndex}
        onTabClicked={onTabClicked}
      />
    </>
  ) : null;
};

export default RootContainer;
