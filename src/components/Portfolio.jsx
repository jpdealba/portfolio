import React from 'react';
import portfolio from '../data/portfolio';
import useAudio from '../utilities/useAudio';
import PortfolioItem from './PortfolioItem';

export default function Portfolio({}) {
  const urlHover = '/hover.mp3';
  const [playingHover, setPlayingHover] = useAudio(urlHover);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            setPlayingHover={setPlayingHover}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            stack={project.stack}
            workUrl={project.workUrl}
          />
        ))}
      </div>
    </div>
  );
}
