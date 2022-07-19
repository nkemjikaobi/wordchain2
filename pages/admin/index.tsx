import React from 'react';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import AdminCard from '../../components/Tournament/AdminCard';
const AdminPage = () => {
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
					<div className='mt-16 mr-4 h-[500px]'>
						<h3 className='text-4xl drop-shadow-sm mt-16'>Summary</h3>
						<p className='mb-8'>Here is a breakdown of what is going on.</p>
						<div className='h-[300px] w-full grid grid-cols-3 gap-4'>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 200,
								}}
							/>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 142,
								}}
							/>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 72,
								}}
							/>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 200,
								}}
							/>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 142,
								}}
							/>
							<AdminCard
								tournament={{
									item: 'Cryp',
									amount: 72,
								}}
							/>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-12 mb-12'>
						<div className='drop-shadow-lg'>
							<h2 className='text-2xl mb-8 mt-12'>
								Tournaments Ended Yesterday
							</h2>
							<table className='table-auto w-full'>
								<thead>
									<tr className='border-b-2 text-xl'>
										<th className='w-1/5'>Name</th>
										<th className='w-1/5'>Total Stake</th>
										<th className='w-1/5 whitespace-nowrap'>Actions</th>
									</tr>
								</thead>

								<tbody className='text-xl mt-8'>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>
											<button className='border border-[#0E1027] py-1 bg-[#0E1027] text-white w-24 rounded-md uppercase'>
												PAYOUT
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>
											<button className='border border-[#0E1027] py-1 bg-[#0E1027] text-white w-24 rounded-md uppercase'>
												PAYOUT
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>
											<button className='border border-[#0E1027] py-1 bg-[#0E1027] text-white w-24 rounded-md uppercase'>
												PAYOUT
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>
											<button className='border border-[#0E1027] py-1 bg-[#0E1027] text-white w-24 rounded-md uppercase'>
												PAYOUT
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>
											<button className='border border-[#0E1027] py-1 bg-[#0E1027] text-white w-24 rounded-md uppercase'>
												PAYOUT
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='drop-shadow-lg'>
							<h2 className='text-2xl mb-8 mt-12'>Top Tournaments</h2>
							<table className='table-auto w-full '>
								<thead>
									<tr className='border-b-2 text-xl'>
										<th className='w-1/5'>Name</th>
										<th className='w-1/5'>Total Stake</th>
										<th className='w-1/5 whitespace-nowrap'>Participants</th>
									</tr>
								</thead>

								<tbody className='text-xl mt-8'>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>23</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>23</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>23</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>23</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>Cryp</td>
										<td className='text-[#0E1027]'>123 WCT</td>
										<td className='text-[#0E1027]'>23</td>
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

export default AdminPage;
