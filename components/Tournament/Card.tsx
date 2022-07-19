import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Card = ({ tournament }: any) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push('/dashboard/tournaments/2')}
			className={`w-full cursor-pointer h-full  bg-[#040B21] px-4 py-8  rounded-lg text-white flex flex-col justify-between !drop-shadow-[200px]`}
		>
			<div className='mt-16'>
				<div className='flex gap-[20px] items-center'>
					<h2 className='font-bold text-[3rem] m-0'>{tournament.title}</h2>
					{/* {tournament.isCountry && <Image src} */}
				</div>
				<p>{tournament.description}</p>
			</div>
			<div className='flex justify-between w-full items-center'>
				<p>Number of Participants: {tournament.numberOfParticipants}</p>
				<button className='flex items-center justify-center border w-24 h-12 text-[#040B21] border-white bg-white rounded'>
					{' '}
					Enter <AiOutlineArrowRight className='ml-2' />
				</button>
			</div>
		</div>
	);
};

export default Card;
