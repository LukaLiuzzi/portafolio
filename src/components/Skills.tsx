import { useState } from 'react';
import SkillsLogos from './SkillsLogos';
import Experience from './Experience';
import Studies from './Studies';

enum SkillsType {
	'skills',
	'experience',
	'studies',
}

const Skills: React.FC = () => {
	const [skills, setSkills] = useState<SkillsType>(SkillsType.skills);

	const handleSkillsChange = (type: SkillsType) => {
		setSkills(type);
	};

	return (
		<div className='mt-14'>
			<h2 className='text-4xl font-bold text-center'>Skills</h2>

			<div className='flex justify-center items-center gap-6 font-bold'>
				<button
					className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'
					onClick={() => handleSkillsChange(SkillsType.skills)}
				>
					Skills
				</button>
				<button
					className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'
					onClick={() => handleSkillsChange(SkillsType.experience)}
				>
					Experiencia
				</button>
				<button
					className='mt-6 dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase'
					onClick={() => handleSkillsChange(SkillsType.studies)}
				>
					Estudios
				</button>
			</div>

			{skills === SkillsType.skills && <SkillsLogos />}
			{skills === SkillsType.experience && <Experience />}
			{skills === SkillsType.studies && <Studies />}
		</div>
	);
};

export default Skills;
