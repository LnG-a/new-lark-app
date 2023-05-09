import styles from "./index.module.scss";
import { ReactComponent as EthLogo } from "assets/img/newlark/eth-logo.svg";
import classnames from "classnames";
import React, { FC } from "react";

interface SymbolProps {
  readonly symbol: string;
  readonly icon?: string;
  readonly iconSize?: number;
}

const Symbol: FC<SymbolProps> = ({
  symbol,
  icon,
  iconSize = 24,
}: SymbolProps) => (
  <div className={classnames(["symbol-component", styles.symbol])}>
    {icon ? (
      <img src={icon} width={iconSize} height={iconSize} />
    ) : (
      <EthLogo width={iconSize} height={iconSize} />
    )}
    <span className={classnames(["symbol-name", styles.symbolName])}>
      {symbol}
    </span>
  </div>
);

export default Symbol;
