import React from 'react';
import BasePageLayout from '../../components/BasePageLayout/BasePageLayout';
import Card from '../../components/Tournament/Card';
import useWallet from '../../hooks/useWallet';

const AllTournamentsPage = () => {
	const { tournaments } = useWallet();
	return (
		<BasePageLayout>
			<div className='mt-16 mr-4'>
				<h3 className='text-4xl drop-shadow-sm mt-16'>All Tournaments</h3>
				<p className='mb-8'>These are all the tournaments on wordchain.</p>
				<div className='h-[300px] w-full grid lg:grid-cols-3 gap-4'>
					{tournaments ? (
						tournaments.map((tournament: any, index: any) => (
							<Card tournament={tournament} key={index} />
						))
					) : (
						<>There are no tournaments yet...</>
					)}
				</div>
			</div>
		</BasePageLayout>
	);
};

export default AllTournamentsPage;
