import { Connector, useAuth } from "clients/web3";
import { ConnectWalletId } from "modals/ConectWallet";
import { isMobile } from "react-device-detect";
import { useModal } from "react-modal-better-hooks";

const useConnectWallet = () => {
  const [, { open: openConnectModal }] = useModal(ConnectWalletId);
  const { login } = useAuth();

  return () => {
    if (isMobile) {
      login(Connector.MetaMask);
      return;
    }
    login(Connector.MetaMask);

    // openConnectModal()
  };
};

export default useConnectWallet;
