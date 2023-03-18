import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience: React.FC = () => {
	return (
		<div className='mt-12'>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{
						background: 'orange',
						color: '#000',
						fontWeight: 'bold',
					}}
					contentArrowStyle={{
						borderRight: '7px solid orange',
					}}
					dateClassName='lg:text-green-700 lg:mx-2'
					date='2022 - Presente'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaBriefcase />}
				>
					<h3 className='vertical-timeline-element-title'>
						Tutor Javascript, React, Desarrollo Web
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>CoderHouse</h4>
					<p>
						Enseñanza de programación web, diseño de interfaces, optimización de
						SEO y manejo de bases de datos. optimización de SEO y manejo de
						bases de datos.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{
						background: 'orange',
						color: '#000',
						fontWeight: 'bold',
					}}
					contentArrowStyle={{
						borderRight: '7px solid orange',
					}}
					dateClassName='lg:text-green-700 lg:mx-2'
					date='2022 - Presente'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaBriefcase />}
				>
					<h3 className='vertical-timeline-element-title'>
						Desarrollador Full Stack
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>
						Boceto Contenidos
					</h4>
					<p>
						Desarrollo de aplicaciones web y móviles, diseño de interfaces,
						optimización de SEO y manejo de bases de datos. optimización de SEO
						y manejo de bases de datos.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					date='2021 - Presente'
					contentStyle={{
						background: 'orange',
						color: '#000',
						fontWeight: 'bold',
					}}
					contentArrowStyle={{
						borderRight: '7px solid orange',
					}}
					dateClassName='lg:text-green-700 lg:mx-2'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaBriefcase />}
				>
					<h3 className='vertical-timeline-element-title'>
						Desarrollador Freelance
					</h3>
					<p>
						Desarrollo de aplicaciones web y móviles, diseño de interfaces,
						optimización de SEO y manejo de bases de datos.
					</p>
				</VerticalTimelineElement>
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
