import React, { useEffect, useState } from 'react';
import BasePageLayout from '../../components/BasePageLayout/BasePageLayout';
import Modal from '../../components/Modal/Modal';
import CreateTournament from '../../components/modals/CreateTournament';
import Card from '../../components/Tournament/Card';
import useWallet from '../../hooks/useWallet';

const CreatedTournamentsPage = () => {
	const [createTournament, setCreatedTournament] = useState<boolean>(false);
	
	const { tournaments, address } = useWallet();
	const [tournaments_, setTournaments_] = useState<any>();

	useEffect(() => {
		if(tournaments !== null) {
			setTournaments_(tournaments.filter((t: any) => t.owner === address))
		}
	}, [tournaments])

	return (
		<BasePageLayout>
			<div className='mt-16 mr-4'>
				<div className='flex items-center justify-between'>
					<div>
						<h3 className='text-4xl drop-shadow-sm mt-16'>Your Tournaments</h3>
						<p className='mb-8'>These are tournaments created by you.</p>
					</div>
					<button
						onClick={() => setCreatedTournament(true)}
						className='border whitespace-nowrap mr-4 border-[#0E1027] p-3 bg-[#0E1027] text-white w-48 rounded-md uppercase'
					>
						create tournament
					</button>
				</div>

				<div className='h-[300px] w-full grid lg:grid-cols-3 gap-4'>
					{tournaments_ && tournaments_.length > 0 ? (tournaments_.map((tournament_: any, id: number) => {
						
						return <Card
							tournament={{
							name: tournament_.name,
							description: tournament_.description,
							numberOfParticipants: tournament_.numberOfParticipants
						}}
					/>
					})) : (
						<>You have not created a tournament yet...</>
					)}
				</div>
			</div>
			<Modal
				visibility={createTournament}
				toggleVisibility={setCreatedTournament}
			>
				<CreateTournament setCreatedTournament={setCreatedTournament} />
			</Modal>
		</BasePageLayout>
	);
};

export default CreatedTournamentsPage;
