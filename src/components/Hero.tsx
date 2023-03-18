import { BsGithub } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';

const Hero: React.FC = () => {
	return (
		<section className='mt-16 px-4'>
			<div className='flex justify-center items-center flex-col gap-6 font-bold max-w-lg m-auto w-full'>
				<h2 className='text-2xl'>
					Soy Luka <span>👋</span>
				</h2>

				<h1 className='text-4xl max-w-md text-center'>
					Desarrollador Full Stack
				</h1>

				<p className='text-lg text-center'>
					Desarrollador web con experiencia en el desarrollo de aplicaciones
					web, aplicaciones móviles y aplicaciones de escritorio.
				</p>

				<div className='flex items-center gap-4'>
					<BsGithub className='text-3xl' />
					<BsGithub className='text-3xl' />
					<BsGithub className='text-3xl' />
				</div>

				<div>
					<FiArrowDown className='text-5xl' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
