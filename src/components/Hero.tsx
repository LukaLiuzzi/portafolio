import { BsGithub } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero: React.FC = () => {
	return (
		<SectionWrapper id='hero'>
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
					<a href='https://www.linkedin.com/in/lukaliuzzi/' target='_blank'>
						<FaLinkedin className='text-3xl' />
					</a>
					<a href='https://github.com/lukaliuzzi' target='_blank'>
						<BsGithub className='text-3xl' />
					</a>
					<a href='mailto:lukaliuzzidev@gmail.com' target='_blank'>
						<MdEmail className='text-3xl' />
					</a>
				</div>

				<div>
					<FiArrowDown className='text-5xl' />
				</div>
			</div>
		</SectionWrapper>
	);
};
export default Hero;
