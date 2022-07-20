import React, { useEffect } from 'react';
import Board from '../Board/Board';
import GameOver from '../GameOver/GameOver';
import Keyboard from '../Keyboard/Keyboard';
import useBoard from '../../hooks/useBoard';
import useWallet from '../../hooks/useWallet';
import { useRouter } from 'next/router';

const Wordle = () => {
	const router = useRouter();
    const { gameOver, generateWords, currentAttempt } = useBoard();
	const { currentTournament, players, address, sendScore, wordChainContract } = useWallet();

    const handleGameOver = async () => {
		let playerTournamentId = players.filter((t:any) => t.address === address)[0].id;
		console.log(address);
		console.log(playerTournamentId);


		sendScore(wordChainContract, address, currentTournament, 7 - currentAttempt.attempt, playerTournamentId);
    }
    

	useEffect(() => {
		if (wordChainContract === null) {
			// router.push("/dashboard");
		}
		generateWords();
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if(gameOver.gameOver) {
			handleGameOver();
		}
		//eslint-disable-next-line
	}, [gameOver.gameOver]);
	return (
        <div className='w-[800px] mx-auto'>
            <h1 className='text-7xl text-center text-white pt-12 mb-4'>Wordle</h1>
			<Board />
			{gameOver.gameOver ? <GameOver /> : <Keyboard />}
		</div>
	);
};

export default Wordle;
