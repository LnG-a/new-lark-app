import MarketList from "./components/MarketList";
import MarketTable from "./components/MarketTable";
import Statistics from "./components/Statistics";
import { useGetMarkets } from "clients/api";
import Spiner from "components/Spiner";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const Markets: FC = () => {
  const { t } = useTranslation();
  const { data: { markets } = { markets: [] }, isLoading } = useGetMarkets();

  if (isLoading) {
    return <Spiner size={40} text={t("market.loading")} asBlock />;
  }

  return (
    <>
      <Statistics markets={markets} />
      <MarketTable markets={markets} />

      {/* <MarketList markets={markets} /> */}
    </>
  );
};

export default Markets;
