import React from "react";
import styles from "components/Metrics/styles.scss";
import Clock from "components/core/icons/Clock";
import Sum from "components/core/icons/Sum";
import Memory from "components/core/icons/Memory";
import Page from "components/core/icons/Page";

const tabs = [
  {
    title: "AVG. RESPONSE DELAY",
    Icon: Clock,
    value: "23ms"
  },
  {
    title: "LAST QUEUE SIZE",
    Icon: Sum,
    value: 32
  },
  {
    title: "AVG. PAYLOAD SIZE",
    Icon: Memory,
    value: "1.35kb"
  },
  {
    title: "DEAD LETTER QUEUE",
    Icon: Page,
    value: 0
  }
];

export default ({ activeTabIndex, onTabClicked }) => (
  <div className={styles.metrics}>
    <div className={styles.tabs}>
      {tabs.map(({ Icon, ...tab }, i) => {
        return (
          <button
            className={`${styles.tab} ${
              i === activeTabIndex ? styles.activeTab : ""
            }`}
            type="button"
            onClick={() => onTabClicked(i)}
          >
            <div className={styles.tabHeader}>
              <div>
                <span className={styles.centerVertically}>{tab.title}</span>
                <span className={styles.icon} />
              </div>
              <div>
                <Icon className={styles.icon} />
              </div>
            </div>
            <div className={styles.tabValue}>{tab.value}</div>
          </button>
        );
      })}
    </div>
  </div>
);
