import PoolItem from "./components/PoolItem";
import styles from "./index.module.scss";
import { useGetVaults } from "clients/api";
import { useAuth } from "clients/web3";
import Spiner from "components/Spiner";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const Stake: FC = () => {
  const { t } = useTranslation();
  const { accountAddress } = useAuth();
  const { data: pools, isLoading } = useGetVaults({
    accountAddress,
  });

  if (isLoading) {
    return <Spiner size={40} text={t("stake.loading")} asBlock />;
  }

  return (
    <div className={styles.stake}>
      {pools.map((pool) => (
        <PoolItem key={pool.stakedTokenId} pool={pool} />
      ))}
    </div>
  );
};

export default Stake;
