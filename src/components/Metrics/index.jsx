import React from "react";
import styles from "components/Metrics/styles.scss";
import Tabs from "components/Tabs";
import TopChart from "components/TopChart";
import PrimaryChart from "components/PrimaryChart";

const WIDTH = 1000;

export default ({
  primaryBarData,
  primaryLineData,
  averageValues,
  activeTabIndex,
  onTabClicked
}) => (
  <div className={styles.metrics}>
    <Tabs
      averageValues={averageValues}
      charts={primaryLineData}
      activeTabIndex={activeTabIndex}
      onTabClicked={onTabClicked}
    />
    <div className={styles.charts}>
      <TopChart
        width={WIDTH}
        height={70}
        data={primaryLineData[activeTabIndex] || []}
      />
      <PrimaryChart
        width={WIDTH}
        height={224}
        primaryBarData={primaryBarData[activeTabIndex] || []}
        primaryLineData={primaryLineData[activeTabIndex] || []}
      />
    </div>
  </div>
);
