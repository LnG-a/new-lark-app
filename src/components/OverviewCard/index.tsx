import styles from "./index.module.scss";
import { ReactComponent as ArrowRight } from "assets/img/newlark/arrow-to.svg";
import { nanoid } from "nanoid";
import React, { FC } from "react";

interface OverViewItem {
  readonly label: string;
  readonly value: $StringOrNumber | $StringOrNumber[];
}

interface OverviewCardProps {
  readonly title: string;
  readonly overviews: OverViewItem[];
}

const OverviewCard: FC<OverviewCardProps> = ({
  title,
  overviews,
}: OverviewCardProps) => (
  <div className={styles.overviewCard}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.cardRows}>
      {overviews.map(({ label, value }) => {
        let valueNode = <p className={styles.rowValue}>{value}</p>;
        if (Array.isArray(value)) {
          valueNode = (
            <div className={styles.rowValue}>
              {value[0]}
              <span className={styles.arrow}>
                <ArrowRight width={16} />
              </span>
              {value[1]}
            </div>
          );
        }

        return (
          <div className={styles.cardRow} key={nanoid()}>
            <label className={styles.rowLabel}>{label}</label>
            {valueNode}
          </div>
        );
      })}
    </div>
  </div>
);

export default OverviewCard;
