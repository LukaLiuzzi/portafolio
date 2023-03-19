import ProjectCard from './ProjectCard';
import ProjectsJson from '../assets/projects.json';
import { ProjectCardProps } from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const Projects: React.FC = () => {
	const projects: ProjectCardProps[] = ProjectsJson;

	return (
		<SectionWrapper id='projects'>
			<h2 className='text-4xl font-bold'>Proyectos</h2>

			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
				{projects.map((project) => (
					<ProjectCard {...project} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default Projects;
