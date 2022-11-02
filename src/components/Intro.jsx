import React from 'react';

function Intro() {
  return (
	  <section
		  id='intro'
		  className='flex items-center justify-center flex-col pt-10 pb-6'>

		<div className='text-center'>
			<h1 className='text-4xl md:text-5xl text-white mb-1 md:mb-3 font-bold'>
				Juan Pablo
			</h1>
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

export default Intro