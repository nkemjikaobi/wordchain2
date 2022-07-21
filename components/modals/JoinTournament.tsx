import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Dialog } from '@headlessui/react';
import { ImSpinner9 } from 'react-icons/im';
import useWallet from '../../hooks/useWallet';
import showToast from '../../helpers/showToast';
import { v4 as uuidv4 } from 'uuid';
import convertToWei from '../../helpers/convertToWei';
import { NotificationType } from '../../constants';
import { useRouter } from 'next/router';

const JoinTournament = ({
	setJoinTournament,
	tournamentt,
}: any) => {
	const {
		wordChainContract,
		tokenContract,
		tokenBalance,
		stakingContract,
		address,
		web3,
	} = useWallet();
	const [loading, setLoading] = useState<boolean>(false);
	const { joinTournament } = useWallet();
	const [hasApproved, setHasApproved] = useState(false);
	const [hasStaked, setHasStaked] = useState(false);
	const [tournament, setTournament] = useState({
		stake: '',
		tournamentKey: uuidv4(),
	});
	const router = useRouter();

	const TOURNAMENT_KEY = '4c7df3b0-30d5-4148-8888-b69119343981';

	const handleApprove = async () => {
		if (tournament.stake === '') {
			return showToast('Please fill in all fields', 'error');
		}

		const { stake, tournamentKey } = tournament;
		if (tournamentt.isPrivate) {
			if (tournamentKey !== TOURNAMENT_KEY)
				return showToast('Invalid tournament key', 'error');
		}

		if (tokenBalance < stake) return showToast('Insufficent tokens', 'error');

		setLoading(true);
		try {
			await tokenContract.methods
				.approve(stakingContract._address, convertToWei(web3, stake))
				.send({ from: address });
			setHasApproved(true);
			showToast('Approved', NotificationType.SUCCESS);
		} catch (error) {
			showToast((error as Error).message, NotificationType.ERROR);
		}

		setLoading(false);
	};

	const handleStake = async () => {
		if (tournament.stake === '') {
			return showToast('Please fill in all fields', 'error');
		}

		const { stake, tournamentKey } = tournament;
		if (tokenBalance < stake) return showToast('Insufficent tokens', 'error');

		setLoading(true);
		try {
			await stakingContract.methods
				.stakeToken(stake, tournamentKey)
				.send({ from: address });
			setHasStaked(true);
			showToast('Staked', NotificationType.SUCCESS);
		} catch (error) {
			showToast((error as Error).message, NotificationType.ERROR);
		}

		setLoading(false);
	};

	const handleJoin = async () => {
		if (tournament.stake === '') {
			return showToast('Please fill in all fields', 'error');
		}

		const { stake, tournamentKey } = tournament;
		if (tokenBalance < stake) return showToast('Insufficent tokens', 'error');

		setLoading(true);
		try {
			await joinTournament(
				wordChainContract,
				tournamentt.id,
				tournamentKey,
				address,
				router
			);
			setJoinTournament(false);
		} catch (error) {
			showToast((error as Error).message, NotificationType.ERROR);
		}

		setLoading(false);
	};

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setTournament({ ...tournament, [name]: value });
	};

	return (
		<div className='flex flex-col justify-center items-center'>
			<Dialog.Title
				as='h4'
				className='mb-4 text-base tablet:text-xl font-bold mt-8'
			>
				Join Tournament
			</Dialog.Title>
			<Dialog.Title
				as='h4'
				className='mb-4 text-[2rem] tablet:text-xl font-bold mt-8'
			>
				You need to stake {tournamentt.minimumStake} WCT to join the tournament
			</Dialog.Title>
			{tournamentt.isPrivate && (
				<div className='w-full'>
					<input
						placeholder='minimum amount to stake (in WCT)'
						className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
						type='text'
						name='tournamentKey'
						value={tournament.tournamentKey}
						onChange={handleChange}
					/>
				</div>
			)}
			<div className='w-full'>
				<input
					placeholder='minimum amount to stake (in WCT)'
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='text'
					name='stake'
					value={tournament.stake}
					onChange={handleChange}
				/>
			</div>
			{!hasApproved && (
				<button
					onClick={handleApprove}
					className='flex justify-center items-center mt-10 bg-[#0E1027] w-48 px-5 py-3 text-base rounded-lg hover:bg-slate-900'
				>
					{loading ? (
						<>
							<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
							Approving...
						</>
					) : (
						<>
							Approve {tournament.stake} WCT <BsArrowRight className='ml-4' />
						</>
					)}
				</button>
			)}
			{hasApproved && !hasStaked && (
				<button
					onClick={handleStake}
					className='flex justify-center items-center mt-10 bg-[#0E1027] w-48 px-5 py-3 text-base rounded-lg hover:bg-slate-900'
				>
					{loading ? (
						<>
							<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
							Stake...
						</>
					) : (
						<>
							Stake {tournament.stake} WCT <BsArrowRight className='ml-4' />
						</>
					)}
				</button>
			)}
			{hasApproved && hasStaked && (
				<button
					onClick={handleJoin}
					className='flex justify-center items-center mt-10 bg-[#0E1027] w-48 px-5 py-3 text-base rounded-lg hover:bg-slate-900'
				>
					{loading ? (
						<>
							<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
							Joining...
						</>
					) : (
						<>
							Join Tournament <BsArrowRight className='ml-4' />
						</>
					)}
				</button>
			)}
		</div>
	);
};

export default JoinTournament;
