import React from 'react';

const PortfolioItem = ({imgUrl, title, stack, workUrl}) => {
	return (
		<div className='border-2 border-stone-900 m-1
		dark:border-black rounded-md overflow-hidden'>
			<img
				src={imgUrl}
				alt="portfolio"
				className="w-full h-28 md:h-40 object-cover"
			/>
			<div className='w-full p-4'>
				<h3 className='text-lg md:text-xl mb-2 md:mb-3 
				font-semibold dark:text-black'>
					{title}
				</h3>
				<p className='flex flex-wrap gap-2 flex-row items-center
				dark:text-black justify-start text-xs md:text-sm'>
					{stack.map(item => (
						<span className='inline-block px-2 py-1 font-semibold
						border-2 border-stone-900 dark:border-black rounded-md'>
							{item}
						</span>
					))}
				</p>
			</div>
		</div>
	);
}

export default PortfolioItem;
