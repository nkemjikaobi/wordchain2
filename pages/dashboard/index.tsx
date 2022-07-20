import React, { useEffect, useState } from 'react';
import { cursorTo } from 'readline';
import BasePageLayout from '../../components/BasePageLayout/BasePageLayout';
import Card from '../../components/Tournament/Card';
import useWallet from '../../hooks/useWallet';
const DashboardPage = () => {
	const { tournaments } = useWallet();
	const [hottestTournament, setHottestTournament] = useState<any>();

	useEffect(() => {
		if(tournaments !== null) {
			let res = tournaments.reduce((acc: any, cur: any, idx: any) => {
				return (tournaments[acc].numberOfParticipants > cur.numberOfParticipants) ? acc : idx;
			}, 0)
	
			setHottestTournament(tournaments[res]);
		}
		
	}, [tournaments])
	return (
		<BasePageLayout>
			<div className='mt-16 mr-4'>
				<h3 className='text-4xl mb-8 drop-shadow-sm'>
					Hottest Live Tournaments
				</h3>
				<div className='h-[300px] mb-4'>
					{tournaments ? (
						tournaments.map((tournament: any, index: any) => (
							<Card tournament={hottestTournament} key={index} />
						))
					) : (
						<>There are no tournaments yet...</>
					)}
				</div>
				<h3 className='text-4xl drop-shadow-sm mt-16'>Others</h3>
				<p className='mb-8'>Join a Tournament based on your region</p>
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

export default DashboardPage;
