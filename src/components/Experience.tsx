import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import TimelineCard from './TimelineCard';

const Experience: React.FC = () => {
	return (
		<div className='mt-12'>
			<VerticalTimeline>
				<TimelineCard
					title='Tutor Javascript, React, Desarrollo Web'
					place='CoderHouse'
					description='Enseñanza de programación web. Acompañamiento y corrección de trabajos a los alumnos. Resolución de consultas y armado de ejemplos. Dictado de clases.'
					date='2021 - Presente'
					icon={<FaBriefcase />}
				/>
				<TimelineCard
					title='Desarrollador Full Stack'
					place='Boceto Contenidos'
					description='Desarrollo de aplicaciones web y móviles, diseño de interfaces, optimización de SEO y manejo de bases de datos.'
					date='2021 - Presente'
					icon={<FaBriefcase />}
				/>
				<TimelineCard
					title='Desarrollador Freelance'
					description='Desarrollo de aplicaciones web. Soluciones tecnológicas a medida según las necesidades de los clientes.'
					date='2021 - Presente'
					icon={<FaBriefcase />}
				/>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<FaBriefcase />}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
