import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Dialog } from '@headlessui/react';

const CreatedTournament = ({ setCreatedTournament }: any) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<Dialog.Title
				as='h4'
				className='mb-4 text-base tablet:text-xl font-bold mt-8'
			>
				Create Tournament
			</Dialog.Title>
			<div className='w-full'>
				<input
					placeholder='name of tournament'
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='text'
				/>
			</div>
			<div className='w-full'>
				<input
					placeholder='description of tournament'
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='text'
				/>
			</div>
			<div className='w-full'>
				<input
					placeholder='duration (in days)'
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='text'
				/>
			</div>
			<div className='w-full'>
				<input
					placeholder='minimum amount to stake (in WCT)'
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='text'
				/>
			</div>
			<div className='flex items-baseline justify-center'>
				<label className='mr-4'>IsPublic</label>
				<input
					className='text-black p-5 border border-gray-300 rounded-md w-full mb-4 focus:border-black focus:outline-black'
					type='checkbox'
				/>
			</div>
			<button className='flex items-center mb-4 hover:text-blue-950'>
				Proceed <BsArrowRight className='ml-4' />
			</button>
		</div>
	);
};

export default CreatedTournament;
