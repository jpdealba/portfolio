import React, { useEffect, useState } from 'react';
import useAudio from '../utilities/useAudio';

const PortfolioItem = ({ imgUrl, title, stack, workUrl, setPlayingHover, isMuted }) => {
	const urlClick = "https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3"
	const [playingClick, setPlayingClick] = useAudio(urlClick, isMuted);
	function onClick() {
		setPlayingClick(!playingClick);
		window.open('https://www.google.com')
	}
	return (
		<div className="rounded-md w-full hover:cursor-pointer"
			onMouseEnter={() => { setPlayingHover(true) }}
			onMouseLeave={() => {setPlayingHover(false)}}
			onClick={onClick}
		>
        	<div className="m-3 bg-secondary px-4 py-6 hover:shadow-darkCard rounded-lg transform transition duration-500 hover:scale-110">
				<img
					src={imgUrl}
					alt="portfolio"
					className="w-full h-28 md:h-40 object-cover"
				/>
				<div className='w-full pt-4'>
					<h3 className='text-lg md:text-xl mb-2 md:mb-3
					font-semibold text-white text-center'>
						{title}
					</h3>
					<p className='flex flex-wrap gap-2 flex-row items-center
					text-text justify-center space-x-2 text-xs md:text-sm'>
						{stack.map(item => (
							<span key={item} className='shadow-2xl inline-block px-2 py-1 font-semibold 
							border-2 border-primary text-white rounded-md bg-primary'>
								{item}
							</span>
						))}
					</p>
				</div>
			</div>
			{/* <audio id='hover' src=''/> */}
		</div>
	);

	
}

export default PortfolioItem;
