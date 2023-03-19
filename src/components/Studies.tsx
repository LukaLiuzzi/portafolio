import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ImBooks } from 'react-icons/im';
import TimelineCard from './TimelineCard';

const Studies: React.FC = () => {
	return (
		<div className='mt-12'>
			<VerticalTimeline>
				<TimelineCard
					title='Carrera Desarrollador Full Stack'
					place='CoderHouse'
					description='Desarrollo de aplicaciones web y móviles, diseño de interfaces, optimización de SEO y manejo de bases de datos. optimización de SEO y manejo de bases de datos.'
					date='2021 - 2023'
					icon={<ImBooks />}
					background='lightblue'
				/>
				<TimelineCard
					title='Secundario Completo'
					place='Colegio Bachiller Manuel Belgrano'
					description='Secundario completo en el colegio Bachiller Manuel Belgrano.'
					date='2014 - 2019'
					icon={<ImBooks />}
					background='lightblue'
				/>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					iconStyle={{ background: 'green', color: '#fff' }}
					icon={<ImBooks />}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Studies;
