import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const Studies: React.FC = () => {
	return (
		<div className='mt-12'>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{
						background: 'lightblue',
						color: '#000',
						fontWeight: 'bold',
					}}
					contentArrowStyle={{
						borderRight: '7px solid lightblue',
					}}
					dateClassName='lg:text-green-700 lg:mx-2'
					date='2021 - 2023'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaBriefcase />}
				>
					<h3 className='vertical-timeline-element-title'>
						Carrera Desarrollador Full Stack
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>CoderHouse</h4>
					<p>
						Desarrollo de aplicaciones web y móviles, diseño de interfaces,
						optimización de SEO y manejo de bases de datos. optimización de SEO
						y manejo de bases de datos.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{
						background: 'lightblue',
						color: '#000',
						fontWeight: 'bold',
					}}
					contentArrowStyle={{
						borderRight: '7px solid lightblue',
					}}
					dateClassName='lg:text-green-700 lg:mx-2'
					date='2014 - 2019'
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<FaBriefcase />}
				>
					<h3 className='vertical-timeline-element-title'>
						Secundario Completo
					</h3>
					<h4 className='vertical-timeline-element-subtitle'>
						Colegio Bachiller Manuel Belgrano
					</h4>
					<p>Secundario completo en el colegio Bachiller Manuel Belgrano.</p>
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

export default Studies;
