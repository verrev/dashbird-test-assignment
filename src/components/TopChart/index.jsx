import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "components/TopChart/styles.scss";
import Warning from "components/core/icons/Warning";
import Bulb from "components/core/icons/Bulb";
import Gear from "components/core/icons/Gear";
import RightArrow from "components/core/icons/RightArrow";
import Calendar from "components/core/icons/Calendar";
import DownCaret from "components/core/icons/DownCaret";
import Chart from "components/TopChart/Chart";

const topChartLegends = [
  { titleKey: "primaryChart.pendingIncreased", color: "#fb0f05" },
  { titleKey: "primaryChart.pendingSolved", color: "#3a2cba" }
];

const topChartIndicators = [
  { titleKey: "primaryChart.alerts", Icon: Warning },
  { titleKey: "primaryChart.insights", Icon: Bulb },
  { titleKey: "primaryChart.configChange", Icon: Gear }
];

export default ({ width, height, data }) => (
  <div className={styles.topChart}>
    <div className={styles.topChartTitle}>
      <span className={styles.topChartLegend}>
        {topChartLegends.map((legend) => (
          <span key={legend.titleKey} className={styles.topChartLegendItem}>
            <span
              className={styles.square}
              style={{ background: legend.color }}
            />
            <span className={styles.centerVertically}>
              <FormattedMessage id={legend.titleKey} />
            </span>
          </span>
        ))}
      </span>
      {topChartIndicators.map(({ Icon, ...indicator }) => (
        <span key={indicator.titleKey} className={styles.topChartIndicator}>
          <Icon className={styles.icon} />
          <span className={styles.centerVertically}>
            <FormattedMessage id={indicator.titleKey} />
          </span>
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
    <Chart width={width} height={height} data={data} />
  </div>
);
