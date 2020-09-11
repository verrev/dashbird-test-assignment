import React from "react";
import styles from "components/Body/styles.scss";
import RewindRight from "components/core/icons/RewindRight";
import Metrics from "components/Metrics";
import Overview from "components/Overview";

export default ({ overviewData, onOverviewSortClicked }) => (
  <div className={styles.body}>
    <div className={styles.bodyTitle}>
      <RewindRight className={styles.bodyTitleIcon} />
      <span>alerting-check-policy-conditions</span>
    </div>
    <Metrics />
    <Overview
      overviewData={overviewData}
      onOverviewSortClicked={onOverviewSortClicked}
    />
  </div>
);
