import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '../components/HeroSection/HeroSection';

const Home: NextPage = () => {
  return (
		<>
			<div className='flex justify-between items-center px-48 py-4'>
				<Link href='#'>
					<a className='font-bold text-[32px]'>
						<span>Word</span>
						<span>Chain</span>
					</a>
				</Link>
				<button className='border border-[#0E1027] p-3 bg-[#0E1027] text-white w-32 rounded-md uppercase'>
					connect
				</button>
			</div>
			<HeroSection />
		</>
	);
};

export default Home;
