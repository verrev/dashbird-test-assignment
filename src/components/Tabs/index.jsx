import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "components/Tabs/styles.scss";
import Sparkline from "components/Sparkline";
import Clock from "components/core/icons/Clock";
import Sum from "components/core/icons/Sum";
import Memory from "components/core/icons/Memory";
import Page from "components/core/icons/Page";

const TABS = [
  {
    titleKey: "tabs.avgResponseDelay",
    Icon: Clock
  },
  {
    titleKey: "tabs.lastQueueSize",
    Icon: Sum
  },
  {
    titleKey: "tabs.avgPayloadSize",
    Icon: Memory
  },
  {
    titleKey: "tabs.deadLetterQueue",
    Icon: Page
  }
];

export default ({ averageValues, charts, activeTabIndex, onTabClicked }) =>
  charts.length > 0 ? (
    <div className={styles.tabs}>
      {TABS.map(({ Icon, ...tab }, i) => {
        const isActive = i === activeTabIndex;
        return (
          <div
            key={tab.titleKey}
            className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
            onClick={() => onTabClicked(i)}
          >
            <div className={styles.tabHeader}>
              <div>
                <span className={styles.centerVertically}>
                  <FormattedMessage id={tab.titleKey} />
                </span>
                <span className={styles.icon} />
              </div>
              <div>
                <Icon className={styles.icon} />
              </div>
            </div>
            <div className={styles.tabValue}>{averageValues[i]}</div>
            {!isActive && (
              <Sparkline data={charts[i]} width={184} height={20} />
            )}
          </div>
        );
      })}
    </div>
  ) : null;
