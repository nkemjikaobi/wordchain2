import React from 'react';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';

const Tournaments = () => {
	return (
		<div>
			<div className='flex'>
				<div className='hidden md:block md:bg-black md:text-white md:min-h-[100vh] w-[300px]'>
					<AdminSideBar />
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
					<div className='grid  gap-12 mb-12'>
						<div className='drop-shadow-lg'>
							<h2 className='text-2xl mb-8 mt-12'>Tournaments</h2>
							<table className='table-auto w-full'>
								<thead>
									<tr className='border-b-2 text-xl'>
										<th className=''>Name</th>
										<th className=''>Description</th>
										<th className=' whitespace-nowrap'>
											Number Of Participants
										</th>
										<th className=' whitespace-nowrap'>Minimum Stake</th>
										<th className=' whitespace-nowrap'>Total Stake</th>
										<th className=' whitespace-nowrap'>Mode</th>
										<th className=' whitespace-nowrap'>Deadline</th>
									</tr>
								</thead>

								<tbody className='text-xl mt-8'>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>main tournament</td>
										<td className='text-[#0E1027]'>23</td>
										<td className='text-[#0E1027]'>23 WCT</td>
										<td className='text-[#0E1027]'>230 WCT</td>
										<td className='text-[#0E1027]'>Public</td>
										<td className='text-[#0E1027]'>23-03-2022</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>main tournament</td>
										<td className='text-[#0E1027]'>23</td>
										<td className='text-[#0E1027]'>23 WCT</td>
										<td className='text-[#0E1027]'>230 WCT</td>

										<td className='text-[#0E1027]'>Public</td>
										<td className='text-[#0E1027]'>23-03-2022</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>main tournament</td>
										<td className='text-[#0E1027]'>23</td>
										<td className='text-[#0E1027]'>23 WCT</td>
										<td className='text-[#0E1027]'>230 WCT</td>

										<td className='text-[#0E1027]'>Public</td>
										<td className='text-[#0E1027]'>23-03-2022</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>main tournament</td>
										<td className='text-[#0E1027]'>23</td>
										<td className='text-[#0E1027]'>23 WCT</td>
										<td className='text-[#0E1027]'>230 WCT</td>

										<td className='text-[#0E1027]'>Public</td>
										<td className='text-[#0E1027]'>23-03-2022</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>main tournament</td>
										<td className='text-[#0E1027]'>23</td>
										<td className='text-[#0E1027]'>23 WCT</td>
										<td className='text-[#0E1027]'>230 WCT</td>

										<td className='text-[#0E1027]'>Public</td>
										<td className='text-[#0E1027]'>23-03-2022</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tournaments;
