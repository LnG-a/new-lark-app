import AddToken from "./AddToken";
import ConnectWallet from "./ConnectWallet";
import DrawerMenu from "./DrawerMenu";
import PaddingReward from "./PaddingReward";
import Settings from "./Settings";
import styles from "./index.module.scss";
import { ReactComponent as LogoDark } from "assets/img/newlark/logo-dark.svg";
import { ReactComponent as LogoLight } from "assets/img/newlark/logo-light.svg";
import LogoPlainDark from "assets/img/newlark/logo-plain-dark.png";
import LogoPlainLight from "assets/img/newlark/logo-plain-light.png";
import { ReactComponent as LogoPlain } from "assets/img/newlark/plain-logo.svg";
import classnames from "classnames";
import { useAuth } from "clients/web3";
import Path from "constants/path";
import useTheme from "hooks/useTheme";
import React, { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, matchPath, useLocation } from "react-router-dom";

const Header: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { connected } = useAuth();

  const linkActive = useMemo(
    () => ({
      market:
        pathname === Path.MARKETS ||
        matchPath(pathname, {
          path: Path.MARKET_DETAILS,
          exact: true,
          strict: true,
        }),
      dashboard: pathname === Path.ROOT,
      stake: pathname === Path.STAKE,
      faucet: pathname === Path.FAUCET,
    }),
    [pathname]
  );

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <Link to={Path.ROOT}>
          {isDark ? (
            <LogoDark width={100} height={30} />
          ) : (
            <LogoLight width={100} height={30} />
          )}
        </Link>
        <a
          className={styles.plainLogo}
          href={process.env.REACT_APP_LANDING_PAGE}
        >
          {" "}
          {isDark ? (
            <img
              src={LogoPlainDark}
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            <img
              src={LogoPlainLight}
              style={{ width: "30px", height: "30px" }}
            />
          )}
          {/* <LogoPlain width={38} height={29} /> */}
        </a>
        <div className={styles.linksWrapper}>
          <Link
            to={Path.ROOT}
            className={classnames([
              styles.linkItem,
              linkActive.dashboard ? styles.activeLink : "",
            ])}
          >
            {t("header.dashboard")}
          </Link>
          <Link
            to={Path.MARKETS}
            className={classnames([
              styles.linkItem,
              linkActive.market ? styles.activeLink : "",
            ])}
          >
            {t("header.market")}
          </Link>
          <Link
            to={Path.STAKE}
            className={classnames([
              styles.linkItem,
              linkActive.stake ? styles.activeLink : "",
            ])}
          >
            {t("header.stake")}
          </Link>
          <Link
            to={Path.FAUCET}
            className={classnames([
              styles.linkItem,
              linkActive.faucet ? styles.activeLink : "",
            ])}
          >
            {t("header.faucet")}
          </Link>
        </div>
      </div>
      <div className={styles.functions}>
        {/* <AddToken /> */}
        {connected && linkActive.dashboard && <PaddingReward />}
        <ConnectWallet />
        <Settings />
        <DrawerMenu />
      </div>
    </div>
  );
};

export default Header;
