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
				description='Hablar con el cliente para entender sus necesidades y objetivos.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Investigacion'
				title='Investigacion'
				svg={researchSvg}
				description='Investigar sobre el cliente, su industria y su competencia para desarrollar un mejor producto.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Prototipo'
				title='Prototipo'
				svg={prototypeSvg}
				description='Prototipar para validar las ideas y soluciones.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Desarrollo'
				title='Desarrollo'
				svg={developSvg}
				description='Desarrollar el producto final.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Pruebas'
				title='Pruebas'
				svg={testSvg}
				description='Probar el producto final para asegurar que cumple con las necesidades del cliente.'
			/>
			<AiOutlineArrowDown className='text-3xl text-primary text-center w-full mt-4' />

			<ProcessCard
				alt='Produccion'
				title='Produccion'
				svg={productionSvg}
				description='Lanzar el producto final al mercado.'
			/>
		</SectionWrapper>
	);
};

export default Process;
