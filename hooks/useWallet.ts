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
		fetchAllTournaments,
		createTournament,
		joinTournament,
		fetchAllPlayers,
		fetchJoinedTournaments,
		fetchAdmins,
		fetchAllUsers,

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
		username,
		tournaments,
		players,
		joinedTournaments,
		admins,
		users,
	} = useContext(WalletContext);

	return {
		//methods
		connectWallet,
		disconnectWallet,
		monitorAccountChanged,
		monitorDisconnect,
		loadContract,
		fetchAllTournaments,
		createTournament,
		joinTournament,
		fetchAllPlayers,
		fetchJoinedTournaments,
		fetchAdmins,
		fetchAllUsers,

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
		username,
		tournaments,
		players,
		joinedTournaments,
		admins,
		users
	};
};

export default useWallet;
