import useGetNaiVault from "./useGetNaiVault";
import useGetVestingVaults from "./useGetVestingVaults";
import { useMemo } from "react";
import { Vault } from "types";
import { stringify } from "utilities";

export interface UseGetVaultsOutput {
  isLoading: boolean;
  data: Vault[];
}

const useGetVaults = ({
  accountAddress,
}: {
  accountAddress?: string;
}): UseGetVaultsOutput => {
  const { data: vestingVaults, isLoading: isGetVestingVaultsLoading } =
    useGetVestingVaults({
      accountAddress,
    });

  // const { data: naiVault, isLoading: isNaiVaultLoading } = useGetNaiVault({
  //   accountAddress
  // })

  const data: Vault[] = useMemo(() => {
    const allVaults = [...vestingVaults];

    // if (naiVault) {
    //   allVaults.push(naiVault)
    // }

    return allVaults;
  }, [stringify(vestingVaults)]);

  // }, [stringify(vestingVaults), stringify(naiVault)])

  // const isLoading = isGetVestingVaultsLoading || isNaiVaultLoading
  const isLoading = isGetVestingVaultsLoading;

  return {
    data,
    isLoading,
  };
};

export default useGetVaults;
