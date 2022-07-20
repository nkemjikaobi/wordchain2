import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import BasePageLayout from '../../../../components/BasePageLayout/BasePageLayout';
import useWallet from '../../../../hooks/useWallet';

const SingleTournamentPage = ({ id }: any) => {
	const { fetchAllPlayers, wordChainContract, tournaments, players } =
		useWallet();

	useEffect(() => {
		if (wordChainContract !== null) {
			fetchAllPlayers(wordChainContract, id);
		}
		//eslint-disable-next-line
	}, [wordChainContract]);
	return (
		<BasePageLayout>
			<div className='w-[900px] mx-auto'>
				<div className='mt-16 mr-4 pl-10'>
					{/* <h3 className='text-7xl text-center mb-8 drop-shadow-sm'>
						{tournaments && tournaments[id].name}
					</h3>
					<p className='text-center'>
						{tournaments && tournaments[id].description}
					</p>
					<p className='text-center'>
						Number of Participants: <span>{players && players.length}</span>
					</p> */}
				</div>
				{players ? (
					<table className='table-auto mt-8 w-full '>
						<thead>
							<tr className='border-b-2 text-4xl'>
								<th className='w-[10%]'>S/N</th>
								<th className='w-1/2'>Username</th>
								<th className='w-1/5'>Score</th>
								<th className='w-1/5 whitespace-nowrap'>Games Played</th>
							</tr>
						</thead>

						<tbody className='text-xl '>
							{players &&
								players
									.sort((a: any, b: any) => b.score - a.score)
									.sort((a: any, b: any) => b.gamesPlayed - a.gamesPlayed)
									.map((player: any, index: any) => (
										<tr
											key={index}
											className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'
										>
											<td className='text-[#0E1027]'>{index + 1}</td>
											<td className='text-[#0E1027]'>{player.username}</td>
											<td className='text-[#0E1027]'>{player.score}</td>
											<td className='text-[#0E1027]'>{player.gamesPlayed}</td>
										</tr>
									))}
						</tbody>
					</table>
				) : (
					<div>There are currently no players...</div>
				)}
				<button className='border mt-8 border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
					start game
				</button>
			</div>
		</BasePageLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({
	query: { id },
}) => {
	return {
		props: {
			id,
		},
	};
};

export default SingleTournamentPage;
