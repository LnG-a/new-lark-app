import styles from "./index.module.scss";
import { ReactComponent as Panding } from "assets/img/newlark/panding.svg";
import classnames from "classnames";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const PandingContent: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classnames([styles.modalContent, styles.pandingContent])}>
      <Panding width={107} height={107} />
      <h1 className={styles.title}>{t("modal.confirmInWallet")}</h1>
    </div>
  );
};

export default PandingContent;
