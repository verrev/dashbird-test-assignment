import React from "react";
import styles from "components/Overview/styles.scss";
import DownCaret from "components/core/icons/DownCaret";
import Lambda from "components/core/icons/Lambda";
import Bulb from "components/core/icons/Bulb";
import Warning from "components/core/icons/Warning";

const overviewCols = [
  {
    title: "RESOURCES",
    orderbyTitle: "Execution time",
    Icon: Lambda,
    contents: [
      {
        id: 0,
        title: "usage-service-prod-record-inventory-usage-on-two-lines",
        subtitle: "125ms"
      },
      {
        id: 1,
        title: "usage-service-prod-record-inventory-usage",
        subtitle: "125ms"
      },
      {
        id: 2,
        title: "usage-service-prod-record-inventory-usage",
        subtitle: "125ms"
      }
    ]
  },
  {
    title: "INSIGHTS",
    Icon: Bulb,
    orderbyTitle: "Latest",
    contents: [
      {
        id: 3,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 4,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 5,
        title: "Queue is growing",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      }
    ]
  },
  {
    title: "ALERTS",
    Icon: Warning,
    orderbyTitle: "Latest",
    contents: [
      {
        id: 6,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 7,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      },
      {
        id: 8,
        title: "Incident #41288",
        time: "3 days ago",
        subtitle:
          "duration (in ms) was above 1 on average during the last 1 minute"
      }
    ]
  }
];

export default () => (
  <div className={styles.overview}>
    {overviewCols.map(({ title, orderbyTitle, Icon, contents }) => {
      return (
        <div key={title} className={styles.swimLane}>
          <div className={styles.overviewColumnHeader}>
            <div>
              <span className={styles.centerVertically}>{title}</span>
              <span className={styles.icon} />
            </div>
            <div className={styles.overviewColumnHeaderOrderBy}>
              <span className={styles.centerVertically}>{orderbyTitle}</span>
              <DownCaret className={styles.icon} />
            </div>
          </div>
          {contents.map((card) => {
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardIconWrapper}>
                  <Icon className={styles.cardIcon} />
                </div>
                <div className={styles.cardContents}>
                  <span className={styles.cardContentsTitle}>
                    <div>{card.title}</div>
                    {card.time && <div>{card.time}</div>}
                  </span>
                  <div className={styles.cardContentsSubtitle}>
                    {card.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
