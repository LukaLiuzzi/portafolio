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
import Logo from './Logo';

const SkillsLogos: React.FC = () => {
	return (
		<div className='mt-12 text-xl'>
			<h3 className='font-bold text-2xl'>Frontend</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<Logo src={LogoHtml} title='HTML' />
				<Logo src={LogoCss} title='CSS' />
				<Logo src={LogoJs} title='JavaScript' />
				<Logo src={LogoSass} title='Sass' />
				<Logo src={LogoTailwind} title='Tailwind' />
				<Logo src={LogoBootstrap} title='Bootstrap' />
			</div>
			<h3 className='font-bold text-2xl mt-8'>Librerias - Frameworks</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<Logo src={LogoReact} title='React' />
				<Logo src={LogoNext} title='Next' />
				<Logo src={LogoReactNative} title='React Native' />
				<Logo src={LogoExpress} title='Express' />
			</div>
			<h3 className='font-bold text-2xl mt-8'>Backend</h3>
			<div className='flex items-center gap-6 flex-wrap mt-8'>
				<Logo src={LogoNode} title='Node' />
				<Logo src={LogoMongo} title='MongoDB' />
				<Logo src={LogoGit} title='Git' />
			</div>
		</div>
	);
};

export default SkillsLogos;
