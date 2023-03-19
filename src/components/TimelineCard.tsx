import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface TimelineCardProps {
	title: string;
	place?: string;
	date: string;
	description: string;
	icon: React.ReactNode;
	background?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
	title,
	place,
	date,
	description,
	icon,
	background = 'orange',
}) => {
	return (
		<VerticalTimelineElement
			className='vertical-timeline-element--work'
			contentStyle={{
				background,
				color: '#000',
				fontWeight: 'bold',
			}}
			contentArrowStyle={{
				borderRight: `7px solid ${background}`,
			}}
			dateClassName='lg:text-green-700 lg:mx-2'
			date={date}
			iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			icon={icon}
		>
			<h3 className='vertical-timeline-element-title'>{title}</h3>
			<h4 className='vertical-timeline-element-subtitle'>{place}</h4>
			<p>{description}</p>
		</VerticalTimelineElement>
	);
};
export default TimelineCard;
