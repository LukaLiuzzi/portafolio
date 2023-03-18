import SkillsLogos from './SkillsLogos';

const Skills: React.FC = () => {
	return (
		<div className='mt-14'>
			<h2 className='text-4xl font-bold text-center'>Skills</h2>

			<div className='flex justify-center items-center gap-6 font-bold'>
				<button className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'>
					Skills
				</button>
				<button className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'>
					Experiencia
				</button>
				<button className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'>
					Estudios
				</button>
			</div>

			<SkillsLogos />
		</div>
	);
};

export default Skills;
