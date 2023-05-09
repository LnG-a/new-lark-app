// import { ReactComponent as EnglandFlag } from 'assets/img/newlark/flags/england.svg'
import { PANEL_ENUMS } from "./enum";
import styles from "./index.module.scss";
import { ReactComponent as ArrowLeft } from "assets/img/newlark/arrow-left.svg";
import { ReactComponent as Checked } from "assets/img/newlark/checked.svg";
import classnames from "classnames";
import React, { FC, SetStateAction, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface SelectLocaleCardProps {
  updatePanel: (panel: SetStateAction<PANEL_ENUMS>) => void;
}

const SelectLocaleCard: FC<SelectLocaleCardProps> = ({
  updatePanel,
}: SelectLocaleCardProps) => {
  const { t } = useTranslation();

  const selectLocale = useCallback(() => {
    updatePanel(PANEL_ENUMS.INITIAL_PANEL);
  }, []);

  return (
    <div className={styles.settingsCard}>
      <div
        className={styles.backRow}
        onClick={() => updatePanel(PANEL_ENUMS.INITIAL_PANEL)}
      >
        <span className={styles.icon}>
          <ArrowLeft width={13} height={13} />
        </span>
        {t("settings.selectLanguage")}
      </div>
      <div
        className={classnames([styles.settingsRow, styles.localeRow])}
        onClick={selectLocale}
      >
        <div className={styles.localeName}>
          {/* <EnglandFlag width={20} height={10} /> */}
          <span className={styles.localeText}>English</span>
        </div>
        <Checked width={16} height={11} />
      </div>
    </div>
  );
};

export default SelectLocaleCard;
