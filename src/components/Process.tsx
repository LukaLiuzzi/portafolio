import ProcessCard from './ProcessCard';
import talkSvg from '../assets/talk.svg';
import researchSvg from '../assets/research.svg';
import prototypeSvg from '../assets/prototype.svg';
import developSvg from '../assets/develop.svg';
import testSvg from '../assets/test.svg';
import productionSvg from '../assets/production.svg';
import { AiOutlineArrowDown } from 'react-icons/ai';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

const Process: React.FC = () => {
	return (
		<SectionWrapper id='process'>
			<SectionTitle title='Proceso' />

			<ProcessCard
				alt='Personas hablando'
				title='Hablar'
				svg={talkSvg}
				description='Converso con vos para entender tus necesidades y objetivos.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Investigación'
				title='Investigación'
				svg={researchSvg}
				description='Investigo sobre tu negocio, tu industria y tu competencia para desarrollar un mejor producto.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Prototipo'
				title='Prototipo'
				svg={prototypeSvg}
				description='Prototipo para validar las ideas y soluciones.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Desarrollo'
				title='Desarrollo'
				svg={developSvg}
				description='Desarrollo el producto final.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Pruebas'
				title='Pruebas'
				svg={testSvg}
				description='Pruebas del producto final para asegurar que cumple con tus necesidades y objetivo.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Producción'
				title='Producción'
				svg={productionSvg}
				description='Lanzamiento del producto final al mercado.'
			/>
		</SectionWrapper>
	);
};

export default Process;
