import { useContext } from 'react';
import WalletContext from '../context/wallet/WalletContext';

/**
 * This is a hook to return all (functions / methods) and state variables in the wallet context provider
 * Prevents reimports and repititions of useContext and the wallet context
 * @returns
 */
const useWallet = () => {
	const {
		//methods
		connectWallet,
		disconnectWallet,
		monitorAccountChanged,
		monitorDisconnect,
		loadContract,

		//state variables
		address,
		isConnected,
		balance,
		web3,
		provider,
		symbol,
		providerOptions,
		web3Modal,
		tokenContract,
		adminContract,
		wordChainContract,
		stakingContract,
		tokenBalance,
	} = useContext(WalletContext);

	return {
		//methods
		connectWallet,
		disconnectWallet,
		monitorAccountChanged,
		monitorDisconnect,
		loadContract,

		//state variables
		address,
		isConnected,
		balance,
		web3,
		provider,
		symbol,
		providerOptions,
		web3Modal,
		tokenContract,
		adminContract,
		wordChainContract,
		stakingContract,
		tokenBalance,
	};
};

export default useWallet;
