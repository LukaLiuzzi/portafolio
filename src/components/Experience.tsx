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
					description='Enseñanza de programación web, diseño de interfaces, optimización de SEO y manejo de bases de datos. optimización de SEO y manejo de bases de datos.'
					date='2022 - Presente'
					icon={<FaBriefcase />}
				/>
				<TimelineCard
					title='Desarrollador Full Stack'
					place='Boceto Contenidos'
					description='Desarrollo de aplicaciones web y móviles, diseño de interfaces, optimización de SEO y manejo de bases de datos. optimización de SEO y manejo de bases de datos.'
					date='2022 - Presente'
					icon={<FaBriefcase />}
				/>
				<TimelineCard
					title='Desarrollador Freelance'
					description='Desarrollo de aplicaciones web y móviles, diseño de interfaces, optimización de SEO y manejo de bases de datos. optimización de SEO y manejo de bases de datos.'
					date='2022 - Presente'
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
