import React from "react";
import styles from "components/Header/styles.scss";
import DownCaret from "components/core/icons/DownCaret";
import Person from "components/core/icons/Person";
import RightArrow from "components/core/icons/RightArrow";
import ExternalLink from "components/core/icons/ExternalLink";
import Gear from "components/core/icons/Gear";

const breadcrumbs = ["DASHBIRD.IO", "US-EAST-1", "SQS"];
const links = [
  { link: "AWS CONSOLE", Icon: ExternalLink },
  { link: "CONFIGURATION", Icon: Gear }
];

export default () => (
  <>
    <div className={styles.headerBar}>
      <div>
        <span className={styles.pseudoLink}>
          <span className={styles.centerVertically}>DASHBIRD.IO</span>
          <DownCaret className={styles.icon} />
        </span>
        <Person className={`${styles.icon} ${styles.pseudoLink}`} />
      </div>
    </div>
    <div className={styles.headerTitle}>
      <span>
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb}>
            <span className={`${styles.centerVertically} ${styles.pseudoLink}`}>
              {crumb}
            </span>
            {i !== breadcrumbs.length - 1 && (
              <RightArrow
                className={`${styles.smallIcon} ${styles.breadcrumbArrow}`}
              />
            )}
          </span>
        ))}
      </span>
      <span className={styles.headerTitleLinks}>
        {links.map(({ link, Icon }) => (
          <span key={link} className={styles.pseudoLink}>
            <span className={styles.centerVertically}>{link}</span>
            <Icon className={styles.smallPrimaryIcon} />
          </span>
        ))}
      </span>
    </div>
  </>
);
