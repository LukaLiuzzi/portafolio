import Selfie from '../assets/yo.jpg';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
	return (
		<SectionWrapper id='about'>
			<h2 className='text-4xl font-bold'>Sobre mi</h2>
			<p className='mt-4 text-lg'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus hic
				commodi sint architecto laboriosam molestias magni, perferendis
				similique impedit doloremque error harum explicabo blanditiis,
				consequuntur ea numquam excepturi ipsum. At.
			</p>
			<button className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-base dark:text-dark-primary font-bold uppercase'>
				Descargar CV
			</button>

			<div className='mt-14 flex justify-center items-center'>
				<img
					src={Selfie}
					alt='Foto de luka liuzzi, desarrollador web'
					className='rounded w-64 h-64 object-cover'
				/>
			</div>
		</SectionWrapper>
	);
};

export default About;
