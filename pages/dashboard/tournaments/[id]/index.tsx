import React from 'react';
import SideBar from '../../../../components/SideBar/SideBar';

const SingleTournamentPage = () => {
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
					<div className='w-[900px] mx-auto'>
						<div className='mt-16 mr-4 pl-10'>
							<h3 className='text-7xl text-center mb-8 drop-shadow-sm'>Cryp</h3>
							<p className='text-center'>The main tournament</p>
							<p className='text-center'>
								Number of Participants: <span>2</span>
							</p>
						</div>
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
								<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
									<td className='text-[#0E1027]'>1</td>
									<td className='text-[#0E1027]'>derick</td>
									<td className='text-[#0E1027]'>1248</td>
									<td className='text-[#0E1027]'>3</td>
								</tr>
								<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
									<td className='text-[#0E1027]'>2</td>
									<td className='text-[#0E1027]'>ebube</td>
									<td className='text-[#0E1027]'>48</td>
									<td className='text-[#0E1027]'>39</td>
								</tr>
								<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
									<td className='text-[#0E1027]'>3</td>
									<td className='text-[#0E1027]'>marv</td>
									<td className='text-[#0E1027]'>148</td>
									<td className='text-[#0E1027]'>3</td>
								</tr>
								<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
									<td className='text-[#0E1027]'>4</td>
									<td className='text-[#0E1027]'>erin</td>
									<td className='text-[#0E1027]'>128</td>
									<td className='text-[#0E1027]'>3</td>
								</tr>
								<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
									<td className='text-[#0E1027]'>5</td>
									<td className='text-[#0E1027]'>derick</td>
									<td className='text-[#0E1027]'>1248</td>
									<td className='text-[#0E1027]'>33</td>
								</tr>
							</tbody>
						</table>
						<button className='border mt-8 border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
							start game
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleTournamentPage;
