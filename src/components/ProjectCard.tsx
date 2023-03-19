import { ProjectCardProps } from '../interfaces/project.interface';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard: React.FC<ProjectCardProps> = ({
	img,
	title,
	description,
	github,
	url,
}) => {
	return (
		<div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
			<a href='#'>
				{/* <img className='rounded-t-lg' src={img} alt={`Imagen de ${title}`} /> */}
				<iframe src={url}></iframe>
			</a>
			<div className='p-5'>
				<a href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{title}
					</h5>
				</a>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{description}
				</p>
				<div className='flex gap-4 justify-center items-center'>
					{github && (
						<a
							href={github}
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-primary rounded-lg hover:bg-dark-accent focus:ring-4 focus:outline-none focus:ring-dark-secondary dark:bg-dark-primary dark:hover:bg-dark-accent dark:focus:bg-dark-secondary'
						>
							Ver codigo
							<AiFillGithub className='w-5 h-5 ml-2 -mr-1' />
						</a>
					)}
					{url && (
						<a
							href={github}
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-primary rounded-lg hover:bg-dark-accent focus:ring-4 focus:outline-none focus:ring-dark-secondary dark:bg-dark-primary dark:hover:bg-dark-accent dark:focus:bg-dark-secondary'
						>
							Ver deploy
							<svg
								aria-hidden='true'
								className='w-4 h-4 ml-2 -mr-1'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
