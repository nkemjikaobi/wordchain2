import React, { useReducer } from 'react';
import WalletContext from './WalletContext';
import WalletReducer from './WalletReducer';
import {
	CONNECT_WALLET,
	DISCONNECT_WALLET,
	MONITOR_ACCOUNT_CHANGED,
	MONITOR_DISCONNECT,
	LOAD_CONTRACT,
} from '../types';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import wordchainJson from '../../artifacts/wordchain.json';
import adminJson from '../../artifacts/admin.json';
import stakingJson from '../../artifacts/staking.json';
import tokenJson from '../../artifacts/token.json';
import convertToEther from '../../helpers/convertToEther';
import useAlert from '../../hooks/useAlert';
import { NotificationType } from '../../constants';

const WalletState = (props: any) => {
	const initialState = {
		address: null,
		isConnected: false,
		balance: '',
		web3: null,
		provider: null,
		symbol: '',
		providerOptions: null,
		web3Modal: null,
		tokenContract: null,
		adminContract: null,
		wordChainContract: null,
		stakingContract: null,
		tokenBalance: '',
		username: '',
	};

	const [state, dispatch] = useReducer(WalletReducer, initialState);

	const { setAlert } = useAlert();

	//Connect Wallet on Ethereum Network
	const connectWallet = async (router: any) => {
		const providerOptions = {
			walletconnect: {
				package: WalletConnectProvider, // required
				options: {
					infuraId: process.env.NEXT_PUBLIC_INFURA_APP_ID,
				},
			},
		};
		const web3Modal = new Web3Modal({
			theme: 'dark',
			network: 'mainnet', // optional
			cacheProvider: true, // optional
			providerOptions, // required
			//disableInjectedProvider: false
		});
		try {
			const provider = await web3Modal.connect();

			const web3 = new Web3(provider);

			//  Get Accounts
			const accounts = await web3.eth.getAccounts();

			if (accounts.length > 0) {
				//Get Balance
				let balance;
				await web3.eth.getBalance(`${accounts[0]}`, function (err, result) {
					if (err) {
						setAlert(err.message, NotificationType.ERROR);
					} else {
						balance = convertToEther(web3, result);
					}
				});
				dispatch({
					type: CONNECT_WALLET,
					payload: {
						balance,
						accounts,
						web3,
						web3Modal,
						providerOptions,
						provider,
					},
				});
				localStorage.setItem('isWalletConnected', 'true');
				localStorage.setItem('count', '1');

				const count = localStorage.getItem('count');

				count !== '1'
					? setAlert('Wallet Connected', NotificationType.SUCCESS)
					: null;
				router.push('/dashboard');
			}
		} catch (error) {
			setAlert((error as Error).message, NotificationType.ERROR);
		}
	};

	//Load Contract
	const loadContract = async (web3: any, address: any) => {
		try {
			const tokenContract = new web3.eth.Contract(
				tokenJson,
				`${process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS}`
			);
			const adminContract = new web3.eth.Contract(
				adminJson,
				`${process.env.NEXT_PUBLIC_ADMIN_CONTRACT_ADDRESS}`
			);
			const stakingContract = new web3.eth.Contract(
				stakingJson,
				`${process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS}`
			);
			const wordchainContract = new web3.eth.Contract(
				wordchainJson,
				`${process.env.NEXT_PUBLIC_WORDCHAIN_CONTRACT_ADDRESS}`
			);

			//Get token balance (WCT)
			const res = await tokenContract.methods.balanceOf(address).call();
			const tokenBalance = convertToEther(web3, res);
			const username = await wordchainContract.methods
				.userNames(address)
				.call();

			dispatch({
				type: LOAD_CONTRACT,
				payload: {
					tokenContract,
					adminContract,
					stakingContract,
					wordchainContract,
					tokenBalance,
					username,
				},
			});
		} catch (error) {
			setAlert((error as Error).message, NotificationType.ERROR);
		}
	};

	//Disconnect wallet
	const disconnectWallet = async (modal: any, network: string) => {
		dispatch({
			type: DISCONNECT_WALLET,
		});
		setAlert('Wallet Disconnected', NotificationType.SUCCESS);
		localStorage.removeItem('isWalletConnected');
		localStorage.removeItem('count');
	};

	//Monitor disconnect
	const monitorDisconnect = async (provider: any) => {
		// Subscribe to session disconnection
		provider.on('disconnect', (code: number, reason: string) => {
			dispatch({
				type: MONITOR_DISCONNECT,
			});
			localStorage.removeItem('isWalletConnected');
			localStorage.removeItem('count');
			setAlert(reason, NotificationType.ERROR);
		});
	};
	//Monitor account changed
	const monitorAccountChanged = async (provider: any) => {
		// Subscribe to accounts change
		provider.on('accountsChanged', (accounts: string[]) => {
			dispatch({
				type: MONITOR_ACCOUNT_CHANGED,
			});
			localStorage.removeItem('isWalletConnected');
			localStorage.removeItem('count');
		});
	};

	return (
		<WalletContext.Provider
			value={{
				address: state.address,
				isConnected: state.isConnected,
				balance: state.balance,
				web3: state.web3,
				provider: state.provider,
				symbol: state.symbol,
				providerOptions: state.providerOptions,
				web3Modal: state.web3Modal,
				tokenContract: state.tokenContract,
				adminContract: state.contract,
				wordChainContract: state.wordChainContract,
				stakingContract: state.stakingContract,
				tokenBalance: state.tokenBalance,
				username: state.username,
				connectWallet,
				disconnectWallet,
				monitorAccountChanged,
				monitorDisconnect,
				loadContract,
			}}
		>
			{props.children}
		</WalletContext.Provider>
	);
};

export default WalletState;
