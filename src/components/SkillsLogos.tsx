import LogoJs from '../assets/logo-javascript.svg';
import LogoHtml from '../assets/html-1.svg';
import LogoCss from '../assets/css-3.svg';
import LogoSass from '../assets/sass-1.svg';
import LogoReact from '../assets/react-2.svg';
import LogoReactNative from '../assets/react-native-1.svg';
import LogoNode from '../assets/nodejs.svg';
import LogoExpress from '../assets/express-109.svg';
import LogoMongo from '../assets/mongodb-icon-1.svg';
import LogoNext from '../assets/next-js.svg';
import LogoGit from '../assets/git-icon.svg';
import LogoTailwind from '../assets/tailwindcss.svg';
import LogoBootstrap from '../assets/bootstrap-5-1.svg';

const SkillsLogos: React.FC = () => {
	return (
		<div className='mt-12 text-xl'>
			<h3 className='font-bold text-2xl'>Frontend</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoHtml} alt='Logo de Html' className='w-10 h-10' />
					<p>HTML</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoCss} alt='Logo de Css' className='w-10 h-10' />
					<p>CSS</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoJs} alt='Logo de Javascript' className='w-10 h-10' />
					<p>Javascript</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoSass} alt='Logo de Sass' className='w-10 h-10' />
					<p>SASS</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img
						src={LogoTailwind}
						alt='Logo de Tailwind'
						className='w-10 h-10'
					/>
					<p>Tailwind CSS</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img
						src={LogoBootstrap}
						alt='Logo de Bootstrap'
						className='w-10 h-10'
					/>
					<p>Bootstrap</p>
				</div>
			</div>
			<h3 className='font-bold text-2xl mt-8'>Librerias - Frameworks</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoReact} alt='Logo de React' className='w-10 h-10' />
					<p>React</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoNext} alt='Logo de Next' className='w-10 h-10' />
					<p>Next</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img
						src={LogoReactNative}
						alt='Logo de React native'
						className='w-10 h-10'
					/>
					<p>React Native</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoExpress} alt='Logo de Express' className='w-10 h-10' />
					<p>Express</p>
				</div>
			</div>
			<h3 className='font-bold text-2xl mt-8'>Backend</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoNode} alt='Logo de Node js' className='w-10 h-10' />
					<p>Node</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoMongo} alt='Logo de Mongodb' className='w-10 h-10' />
					<p>MongoDB</p>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<img src={LogoGit} alt='Logo de Git' className='w-10 h-10' />
					<p>GIT</p>
				</div>
			</div>
		</div>
	);
};

export default SkillsLogos;
