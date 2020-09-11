import React from "react";
import styles from "components/Overview/styles.scss";
import DownCaret from "components/core/icons/DownCaret";

export default ({ overviewData, onOverviewSortClicked }) => (
  <div className={styles.overview}>
    {overviewData.map(({ title, orderbyTitle, Icon, contents }) => (
      <div key={title} className={styles.swimLane}>
        <div className={styles.overviewColumnHeader}>
          <div>
            <span className={styles.centerVertically}>{title}</span>
            <span className={styles.icon} />
          </div>
          <button
            className={styles.overviewColumnHeaderOrderBy}
            type="button"
            onClick={() => onOverviewSortClicked(title)}
          >
            <span className={styles.centerVertically}>{orderbyTitle}</span>
            <DownCaret className={styles.icon} />
          </button>
        </div>
        {contents.map(({ id, title: ccTitle, time, subtitle }) => (
          <div key={id} className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <Icon className={styles.cardIcon} />
            </div>
            <div className={styles.cardContents}>
              <span className={styles.cardContentsTitle}>
                <div>{ccTitle}</div>
                {time && <div>{time}</div>}
              </span>
              <div className={styles.cardContentsSubtitle}>{subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);
