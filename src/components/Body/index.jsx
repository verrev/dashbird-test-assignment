import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "components/Body/styles.scss";
import RewindRight from "components/core/icons/RewindRight";
import Metrics from "components/Metrics";
import Overview from "components/Overview";

export default ({
  primaryBarData,
  primaryLineData,
  averageValues,
  overviewData,
  onOverviewSortClicked,
  activeTabIndex,
  onTabClicked
}) => (
  <div className={styles.body}>
    <div className={styles.bodyTitle}>
      <RewindRight className={styles.bodyTitleIcon} />
      <FormattedMessage id="page.title" />
    </div>
    <Metrics
      primaryBarData={primaryBarData}
      primaryLineData={primaryLineData}
      averageValues={averageValues}
      activeTabIndex={activeTabIndex}
      onTabClicked={onTabClicked}
    />
    <Overview
      overviewData={overviewData}
      onOverviewSortClicked={onOverviewSortClicked}
    />
  </div>
);
