import React from 'react';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';

const Admins = () => {
	return (
		<div>
			<div className='flex'>
				<div className='hidden md:block md:bg-black md:text-white md:min-h-[100vh] w-[300px]'>
					<AdminSideBar />
				</div>
				<div className='ml-4 tablet:ml-0 md:w-[calc(100vw-300px)]'>
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
							<h2 className='text-2xl mb-8 mt-12'>Admins</h2>
							<table className='table-auto w-full'>
								<thead>
									<tr className='border-b-2 text-xl'>
										<th className=''>Wallet Address</th>
										<th className=' whitespace-nowrap'>actions</th>
									</tr>
								</thead>

								<tbody className='text-xl mt-8'>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>0x337...4357644</td>
										<td>
											<button className='border whitespace-nowrap border-[#0E1027] px-4 py-1 bg-[#0E1027] text-white w-48 rounded-md uppercase'>
												remove admin
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>0x337...4357644</td>
										<td>
											<button className='border whitespace-nowrap border-[#0E1027] px-4 py-1 bg-[#0E1027] text-white w-48 rounded-md uppercase'>
												remove admin
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>0x337...4357644</td>
										<td>
											<button className='border whitespace-nowrap border-[#0E1027] px-4 py-1 bg-[#0E1027] text-white w-48 rounded-md uppercase'>
												remove admin
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>0x337...4357644</td>
										<td>
											<button className='border whitespace-nowrap border-[#0E1027] px-4 py-1 bg-[#0E1027] text-white w-48 rounded-md uppercase'>
												remove admin
											</button>
										</td>
									</tr>
									<tr className='border-b-2 h-16 hover:bg-gray-200 text-gray-600 text-center'>
										<td className='text-[#0E1027]'>0x337...4357644</td>
										<td>
											<button className='border whitespace-nowrap border-[#0E1027] px-4 py-1 bg-[#0E1027] text-white w-48 rounded-md uppercase'>
												remove admin
											</button>
										</td>
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

export default Admins;
