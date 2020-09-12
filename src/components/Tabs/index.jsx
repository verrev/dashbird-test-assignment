import React from "react";
import styles from "components/Tabs/styles.scss";
import Sparkline from "components/Sparkline";

export default ({ tabs, activeTabIndex, onTabClicked }) => (
  <div className={styles.tabs}>
    {tabs.map(({ Icon, ...tab }, i) => {
      const isActive = i === activeTabIndex;

      return (
        <div
          key={tab.title}
          className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
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
          {!isActive && <Sparkline data={tab.data} width={184} height={20} />}
        </div>
      );
    })}
  </div>
);
