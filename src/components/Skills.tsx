import { useState } from 'react';
import SkillsLogos from './SkillsLogos';
import Experience from './Experience';
import Studies from './Studies';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

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
		<SectionWrapper id='skills'>
			<SectionTitle title='Skills' />

			<div className='flex justify-center items-center gap-6 font-bold'>
				<button
					className='mt-6 bg-light-text text-light-primary hover:bg-light-accent dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase hover:dark:bg-green-500'
					onClick={() => handleSkillsChange(SkillsType.skills)}
				>
					Skills
				</button>
				<button
					className='mt-6 bg-light-text text-light-primary hover:bg-light-accent dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase hover:dark:bg-green-500'
					onClick={() => handleSkillsChange(SkillsType.experience)}
				>
					Experiencia
				</button>
				<button
					className='mt-6 bg-light-text text-light-primary hover:bg-light-accent dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase hover:dark:bg-green-500'
					onClick={() => handleSkillsChange(SkillsType.studies)}
				>
					Estudios
				</button>
			</div>

			{skills === SkillsType.skills && <SkillsLogos />}
			{skills === SkillsType.experience && <Experience />}
			{skills === SkillsType.studies && <Studies />}
		</SectionWrapper>
	);
};

export default Skills;
