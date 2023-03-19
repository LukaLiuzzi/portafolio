import developerIllustration from '../assets/developer-illustration.svg';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
	return (
		<SectionWrapper id='contact'>
			<h2 className='text-4xl font-bold'>Contacto</h2>
			<div className='mt-4 flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10'>
				<div>
					<h4 className='text-3xl'>Queres trabajar conmigo?</h4>
					<h4 className='text-3xl'>Tenes una idea?</h4>
					<h4 className='text-3xl'>Hagamosla realidad!!</h4>
					<h3 className='text-3xl font-bold'>
						<a href='mailto:lukaliuzzidev@gmail.com' target='_blank'>
							lukaliuzzidev@gmail.com
						</a>
					</h3>
				</div>
				<img
					src={developerIllustration}
					alt='Desarrollador escribiendo codigo ilustracion'
					className='object-cover mt-8'
				/>
			</div>
		</SectionWrapper>
	);
};

export default Contact;
