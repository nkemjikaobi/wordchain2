import React, { useEffect } from 'react';
import Board from '../Board/Board';
import GameOver from '../GameOver/GameOver';
import Keyboard from '../Keyboard/Keyboard';
import useBoard from '../../hooks/useBoard';

const Wordle = () => {
    const { gameOver, generateWords } = useBoard();

    const handleGameOver = async () => {

    }
    

	useEffect(() => {
		generateWords();
		//eslint-disable-next-line
	}, []);
	return (
        <div className='w-[800px] mx-auto'>
            <h1 className='text-7xl text-center text-white pt-12 mb-4'>Wordle</h1>
			<Board />
			{gameOver.gameOver ? <GameOver /> : <Keyboard />}
		</div>
	);
};

export default Wordle;
