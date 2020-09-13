import React from "react";
import styles from "components/Metrics/styles.scss";
import Tabs from "components/Tabs";
import TopChart from "components/TopChart";
import PrimaryChart from "components/PrimaryChart";

export default ({
  primaryBarData,
  primaryLineData,
  tabs,
  activeTabIndex,
  onTabClicked
}) => (
  <div className={styles.metrics}>
    <Tabs
      tabs={tabs}
      activeTabIndex={activeTabIndex}
      onTabClicked={onTabClicked}
    />
    <div className={styles.charts}>
      <TopChart data={tabs[activeTabIndex].data} />
      <PrimaryChart
        width={1000}
        height={224}
        primaryBarData={primaryBarData}
        primaryLineData={tabs[activeTabIndex].data}
      />
    </div>
  </div>
);
