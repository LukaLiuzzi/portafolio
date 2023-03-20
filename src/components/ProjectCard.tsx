import { AiFillGithub } from 'react-icons/ai';

export interface ProjectCardProps {
	key: number;
	img: string;
	title: string;
	description: string;
	github?: string;
	url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	img,
	title,
	description,
	github,
	url,
}) => {
	return (
		<a href={url} target='_blank'>
			<div className='bg-light-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full'>
				<img
					className='rounded-t-lg object-fill w-full h-48'
					src={img}
					alt={`Imagen de ${title}`}
				/>
				<div className='flex flex-col justify-between flex-1 p-5'>
					<div className='flex-1'>
						<a href='#'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								{title}
							</h5>
						</a>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
							{description}
						</p>
					</div>
					<div className='flex gap-4 justify-center items-center'>
						{github && (
							<a
								href={github}
								target='_blank'
								className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-primary rounded-lg hover:bg-dark-accent focus:outline-none dark:bg-dark-primary dark:hover:bg-dark-accent'
							>
								Ver codigo
								<AiFillGithub className='w-5 h-5 ml-2 -mr-1' />
							</a>
						)}
						{url && (
							<a
								href={url}
								target='_blank'
								className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-dark-primary rounded-lg hover:bg-dark-accent focus:outline-none dark:bg-dark-primary dark:hover:bg-dark-accent'
							>
								Ver
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
		</a>
	);
};

export default ProjectCard;
