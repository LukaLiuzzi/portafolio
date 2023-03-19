import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.svg';

const Footer: React.FC = () => {
	return (
		<footer className='bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text pt-10'>
			<div className='container flex items-center justify-between py-4 px-6 mx-auto border-t-[1px] dark:border-dark-accent gap-4'>
				<div>
					<a href='#home'>
						<img
							src={Logo}
							alt='Logo Luka Liuzzi'
							className='w-8 h-8 mr-2 object-contain'
						/>
					</a>
				</div>
				<p className='text-sm font-medium'>❤️ Creado por Luka Liuzzi ❤️</p>
				<div className='flex space-x-4'>
					<a
						href='https://www.linkedin.com/in/lukaliuzzi'
						target='_blank'
						rel='noopener'
						aria-label='LinkedIn'
					>
						<FaLinkedin className='text-2xl' />
					</a>
					<a
						href='https://github.com/lukaliuzzi'
						target='_blank'
						rel='noopener'
						aria-label='GitHub'
					>
						<FaGithub className='text-2xl' />
					</a>
					<a
						href='mailto:lukaliuzzidev@gmail.com'
						target='_blank'
						rel='noopener'
						aria-label='Email'
					>
						<FaEnvelope className='text-2xl' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
