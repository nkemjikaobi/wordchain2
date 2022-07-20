import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import useWallet from '../../hooks/useWallet';
import Modal from '../Modal/Modal';
import JoinTournament from '../modals/JoinTournament';
import { ImSpinner9 } from 'react-icons/im';
import { BsArrowRight } from 'react-icons/bs';

import WalletReducer from '../../context/wallet/WalletReducer';
import { CURRENT_TOURNAMENT } from '../../context/types';

const Card = ({ tournament }: any) => {

	const router = useRouter();
	const { address, wordChainContract, setCurrentTournament } = useWallet();
	const [joinTournament, setJoinTournament] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setLoading(true);
		const res = await wordChainContract.methods
			.checkIfUserIsATournamentPlayer(tournament.id, address)
			.call();
		if (res < 0) {
			setJoinTournament(true);
			setLoading(false);
		} else {
			router.push(`/dashboard/tournaments/${tournament.id}`);
			setCurrentTournament(tournament.id);
		}
	};

	return (
		<>
			<div
				className={`w-full h-full  bg-[#040B21] px-4 py-8  rounded-lg text-white flex flex-col justify-between !drop-shadow-[200px]`}
			>
				<div className='mt-16'>
					<div className='flex gap-[20px] items-center'>
						<h2 className='font-bold text-[3rem] m-0'>{tournament.name}</h2>
						{/* {tournament.isCountry && <Image src} */}
					</div>
					<p>{tournament.description}</p>
				</div>
				<div className='flex justify-between w-full items-center'>
					<p>Number of Participants: {tournament.numberOfParticipants}</p>
					<button
						onClick={() => {
							handleClick();
						}}
						className='flex cursor-pointer items-center justify-center border w-24 h-12 text-[#040B21] border-white bg-white rounded'
					>
						{loading ? (
							<>
								<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
								Checking Validity...
							</>
						) : (
							<>
								Enter <BsArrowRight className='ml-4' />
							</>
						)}
					</button>
				</div>
			</div>
			<Modal visibility={joinTournament} toggleVisibility={setJoinTournament}>
				<JoinTournament
					setCreatedTosetJoinTournamenturnament={setJoinTournament}
					tournament={tournament}
				/>
			</Modal>
		</>
	);
};

export default Card;
