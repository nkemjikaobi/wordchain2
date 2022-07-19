import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IAlert } from '..';
import Modal from '../../components/Modal/Modal';
import SaveUser from '../../components/modals/SaveUser';
import SideBar from '../../components/SideBar/SideBar';
import BannerCardSkeleton from '../../components/skeletons/BannerCardSkeleton';
import Card from '../../components/Tournament/Card';
import showToast from '../../helpers/showToast';
import useAlert from '../../hooks/useAlert';
import useWallet from '../../hooks/useWallet';
const DashboardPage = () => {
	const { alerts } = useAlert();
	const {
		connectWallet,
		tokenBalance,
		address,
		loadContract,
		web3,
		balance,
		wordChainContract,
		username,
	} = useWallet();
	const router = useRouter();

	const reconnectWallet = async () => {
		await connectWallet(router);
	};

	//Handle Notifications
	useEffect(() => {
		let mounted = true;

		if (mounted && alerts.length > 0) {
			alerts.map((alert: IAlert) => showToast(alert.message, alert.type));
		}
		return () => {
			mounted = false;
		};
		//eslint-disable-next-line
	}, [alerts]);

	//Reconnect wallet on page refresh
	useEffect(() => {
		let mounted = true;

		if (mounted && localStorage?.getItem('isWalletConnected') === 'true') {
			reconnectWallet();
		}
		return () => {
			mounted = false;
		};
		//eslint-disable-next-line
	}, []);

	//load contract for connected users
	useEffect(() => {
		let mounted = true;

		if (mounted && web3 !== null && address !== '') {
			loadContract(web3, address);
		}
		return () => {
			mounted = false;
		};
		//eslint-disable-next-line
	}, [web3, address]);

	//check that username is valid
	useEffect(() => {
		let mounted = true;

		if (mounted && wordChainContract !== null && username === '') {
			setSaveUser(true);
		} else {
			setSaveUser(false);
		}
		return () => {
			mounted = false;
		};
		//eslint-disable-next-line
	}, [username, wordChainContract]);

	const [saveUser, setSaveUser] = useState(false);
	const [newUsername, setNewUserName] = useState('');
	const [toggleImportance, setToggleImportance] = useState(true);

	return (
		<>
			<div>
				<div className='flex'>
					<div className='hidden md:block md:bg-black md:text-white md:min-h-[100vh] w-[300px]'>
						<SideBar />
					</div>
					<div className='ml-4 tablet:ml-0 w-[calc(100vw-300px)]'>
						<div className='flex items-center justify-between'>
							<h3 className='mt-8 text-2xl'>
								Hello ,
								{username && <span className='text-purple-700'>{username} 😌</span>}
							</h3>
							<div className='mr-4 mt-4'>
								<button className='border mr-4 border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
									{Number(balance).toFixed(4)} ETH
								</button>
								<button className='border border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
									{Number(tokenBalance).toFixed(4)} WCT
								</button>
							</div>
						</div>
						<div className='mt-16 mr-4'>
							<h3 className='text-4xl mb-8 drop-shadow-sm'>
								Hottest Live Tournaments
							</h3>
							<div className='h-[300px] mb-4'>
								<Card
									tournament={{
										title: 'Cryp',
										description: 'The main tournament',
										numberOfParticipants: 2,
									}}
								/>
							</div>
							<h3 className='text-4xl drop-shadow-sm mt-16'>
								Country Tournaments
							</h3>
							<p className='mb-8'>Join a Tournament based on your region</p>
							<div className='h-[300px] w-full grid grid-cols-3 gap-4'>
								<Card
									tournament={{
										title: 'Cryp',
										description: 'The main tournament',
										numberOfParticipants: 2,
									}}
								/>
								<Card
									tournament={{
										title: 'Cryp',
										description: 'The main tournament',
										numberOfParticipants: 2,
									}}
								/>
								<Card
									tournament={{
										title: 'Cryp',
										description: 'The main tournament',
										numberOfParticipants: 2,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				visibility={saveUser}
				toggleVisibility={setSaveUser}
				isImportant={toggleImportance}
			>
				<SaveUser
					setSaveUser={setSaveUser}
					newUsername={newUsername}
					setNewUserName={setNewUserName}
					setToggleImportance={setToggleImportance}
				/>
			</Modal>
		</>
	);
};

export default DashboardPage;
