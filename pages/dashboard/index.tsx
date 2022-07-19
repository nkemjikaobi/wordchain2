import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import BannerCardSkeleton from '../../components/skeletons/BannerCardSkeleton';
import Card from '../../components/Tournament/Card';
const DashboardPage = () => {
	return (
		<div>
			<div className='flex'>
				<div className='hidden md:block md:bg-black md:text-white md:min-h-[100vh] w-[300px]'>
					<SideBar />
				</div>
				<div className='ml-4 tablet:ml-0 w-[calc(100vw-300px)]'>
					<div className='flex items-center justify-between'>
						<h3 className='mt-8 text-2xl'>
							Hello , <span className='text-purple-700'>nkem 😌</span>
						</h3>
						<div className='mr-4 mt-4'>
							<button className='border mr-4 border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
								2 ETH
							</button>
							<button className='border border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
								7 WCT
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
	);
};

export default DashboardPage;
