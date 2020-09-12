import React from "react";
import styles from "components/Metrics/styles.scss";
import Tabs from "components/Tabs";
import Warning from "components/core/icons/Warning";
import Bulb from "components/core/icons/Bulb";
import Gear from "components/core/icons/Gear";
import RightArrow from "components/core/icons/RightArrow";
import Calendar from "components/core/icons/Calendar";
import DownCaret from "components/core/icons/DownCaret";
import TopChart from "components/TopChart";

const topChartLegends = [
  { title: "Pending increased", color: "#fb0f05" },
  { title: "Pending solved", color: "#000000" }
];

const topChartIndicators = [
  { title: "Alerts", Icon: Warning },
  { title: "Insights", Icon: Bulb },
  { title: "Config. change", Icon: Gear }
];

export default ({ tabs, activeTabIndex, onTabClicked }) => (
  <div className={styles.metrics}>
    <Tabs
      tabs={tabs}
      activeTabIndex={activeTabIndex}
      onTabClicked={onTabClicked}
    />
    <div className={styles.charts}>
      <div className={styles.topChart}>
        <div className={styles.topChartTitle}>
          <span className={styles.topChartLegend}>
            {topChartLegends.map((indicator) => (
              <span key={indicator.title} className={styles.topChartLegendItem}>
                <span
                  className={styles.square}
                  style={{ background: indicator.color }}
                />
                <span className={styles.centerVertically}>
                  {indicator.title}
                </span>
              </span>
            ))}
          </span>
          {topChartIndicators.map(({ Icon, ...indicator }) => (
            <span key={indicator.title} className={styles.topChartIndicator}>
              <Icon className={styles.icon} />
              <span className={styles.centerVertically}>{indicator.title}</span>
            </span>
          ))}
          <span className={styles.topChartDatepicker}>
            <span className={styles.pseudoLink}>~15 hours ago </span>
            <RightArrow className={styles.mutedIcon} />
            <span className={styles.pseudoLink}>~in 9 hours </span>
            <span className={styles.topChartDatepickerCalendar}>
              <Calendar className={styles.icon} />
              <DownCaret className={styles.icon} />
            </span>
          </span>
        </div>
        <TopChart data={tabs[0].data} width={1000} height={70} />
      </div>
      <div className={styles.primaryChart}>YYY</div>
    </div>
  </div>
);
