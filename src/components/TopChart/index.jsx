import React from "react";
import styles from "components/TopChart/styles.scss";
import Warning from "components/core/icons/Warning";
import Bulb from "components/core/icons/Bulb";
import Gear from "components/core/icons/Gear";
import RightArrow from "components/core/icons/RightArrow";
import Calendar from "components/core/icons/Calendar";
import DownCaret from "components/core/icons/DownCaret";
import Chart from "components/TopChart/Chart";

const topChartLegends = [
  { title: "Pending increased", color: "#fb0f05" },
  { title: "Pending solved", color: "#3a2cba" }
];

const topChartIndicators = [
  { title: "Alerts", Icon: Warning },
  { title: "Insights", Icon: Bulb },
  { title: "Config. change", Icon: Gear }
];

export default ({ data }) => (
  <div className={styles.topChart}>
    <div className={styles.topChartTitle}>
      <span className={styles.topChartLegend}>
        {topChartLegends.map((indicator) => (
          <span key={indicator.title} className={styles.topChartLegendItem}>
            <span
              className={styles.square}
              style={{ background: indicator.color }}
            />
            <span className={styles.centerVertically}>{indicator.title}</span>
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
    <Chart data={data} width={1000} height={70} />
  </div>
);
