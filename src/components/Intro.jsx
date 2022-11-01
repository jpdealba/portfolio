import React from 'react';

function Intro() {
  return (
	  <section
		  id='intro'
		  className='flex items-center justify-center flex-col pt-10 pb-6'>
		<div className='text-center'>
			<h1 className='text-4xl md:text-5xl dark:text-black mb-1 md:mb-3 font-bold'>
				Juan Pablo
			</h1>
			<p className='text-base md:text-xl mb-3 font-medium self-center '>
				Computer Science Engineer & Full Stack Developer
			  </p>
			  <p className='text-sm max-w-xl mb-6 font-bold mx-20 tlastc text-justify'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean eu nibh ut ante luctus tristique nec et elit.
				Nullam rutrum, magna dictum fermentum ornare,
				justo ante suscipit erat, quis condimentum ante tellus sit amet purus.
				Cras vel arcu tempus. justo ante suscipit erat, quis condimentum ante tellus
				sit amet purus erat Aenean eu suscipit.
				<br />
				Morbi facilisis ac quam nec 
				<a
					href='https://youtube.com'
					target={'_blank'}
					className="text-cyan-600 hover:underline 
					underline-offset-2 decoration-2 decoration-red-600"
				>
					{' '}Test{' '}
				</a>
				Donec pulvinar egestas auctor.
			  </p>
		</div>
	</section>
  );
}

export default Intro