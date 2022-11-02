import React from 'react';

function Intro() {
  return (
	  <section
		  id='intro'
		  className='flex items-center justify-center flex-col pt-10 pb-6'>
			<Name />
		<div className='text-center'>


			<p className='text-base md:text-xl mb-3 font-medium self-center text-primary'>
				Computer Science Engineer & Full Stack Developer
			  </p>
			  <p className='text-sm max-w-xl mb-6 mx-10 tlastc text-justify text-text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean eu nibh ut ante luctus tristique nec et elit.
				Nullam rutrum, magna dictum fermentum ornare,
				justo ante suscipit erat, quis condimentum ante tellus sit amet purus.
				Cras vel arcu tempus. justo ante suscipit erat, quis condimentum ante tellus
				sit amet purus erat Aenean eu suscipit.
				Morbi facilisis ac quam nec {' '}
				<a
					href='https://youtube.com'
					target={'_blank'}
					className="text-primary hover:underline 
					underline-offset-2 decoration-2 decoration-primary"
				>
					Test
				</a>
				{' '}Donec pulvinar egestas auctor.
			  </p>
		</div>
	</section>
  );
}


const Name = () => {
	const name = "Juan Pablo"
	const letterArray = name.split('')
	return (
	<div className='flex flex-row text-center'>
			{letterArray.map((value, index) => { return <Letter key={index} letter={value}/>})}
	</div>
  )
}

const Letter = ({ letter }) => {
	if (letter == " ") {
		return (
			<div className='ml-3'></div>
		)
	}else
		return (
			<div
				className={`
					${letter} text-4xl md:text-5xl
					mb-1 md:mb-3 font-bold text-white hover:cursor-default letterHover`}>
				<p className=''>{letter}</p>
			</div>   
	)
}

export default Intro