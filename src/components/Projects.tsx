import ProjectCard from './ProjectCard';
import ProjectsJson from '../assets/projects.json';
import { ProjectCardProps } from '../interfaces/project.interface';

const Projects: React.FC = () => {
	const projects: ProjectCardProps[] = ProjectsJson;

	return (
		<div className='mt-14 text-center'>
			<h2 className='text-4xl font-bold'>Proyectos</h2>

			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
				{projects.map((project) => (
					<ProjectCard {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
