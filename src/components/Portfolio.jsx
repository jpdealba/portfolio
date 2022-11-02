import React from 'react';
import portfolio from '../data/portfolio';
import useAudio from '../utilities/useAudio';
import PortfolioItem from './PortfolioItem';

export default function Portfolio({isMuted}) {
	const urlHover = "src/assets/hover.mp3"
	const [playingHover, setPlayingHover] = useAudio(urlHover, isMuted);
  return (
	<div className='flex flex-col md:flex-row items-center justify-center mx-10'>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
			  {portfolio.map(project => (
				  <PortfolioItem
					  key={project.title}
					  isMuted={isMuted}
					  setPlayingHover={setPlayingHover}
					  imgUrl={project.imgUrl}
					  title={project.title}
					  stack={project.stack}
					  workUrl={project.workUrl}
				  />
			  ))}
		</div>
	</div>
  );
}
