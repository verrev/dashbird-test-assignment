import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "components/Header/styles.scss";
import DownCaret from "components/core/icons/DownCaret";
import Person from "components/core/icons/Person";
import RightArrow from "components/core/icons/RightArrow";
import ExternalLink from "components/core/icons/ExternalLink";
import Gear from "components/core/icons/Gear";

const breadcrumbs = ["common.brand", "breadcrumb.region", "breadcrumb.sqs"];
const links = [
  { linkKey: "link.aws", Icon: ExternalLink },
  { linkKey: "link.configuration", Icon: Gear }
];

export default () => (
  <>
    <div className={styles.headerBar}>
      <div>
        <span className={styles.pseudoLink}>
          <span className={styles.centerVertically}>
            <FormattedMessage id="common.brand" />
          </span>
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
              <FormattedMessage id={crumb} />
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
        {links.map(({ linkKey, Icon }) => (
          <span key={linkKey} className={styles.pseudoLink}>
            <span className={styles.centerVertically}>
              <FormattedMessage id={linkKey} />
            </span>
            <Icon className={styles.smallPrimaryIcon} />
          </span>
        ))}
      </span>
    </div>
  </>
);
