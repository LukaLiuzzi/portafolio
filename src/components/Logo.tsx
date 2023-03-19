interface LogoProps {
	src: string;
	title: string;
}

const Logo: React.FC<LogoProps> = ({ src, title }) => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<img
				src={src}
				alt={`Logo de ${title}`}
				className='w-10 h-10 animate-spin spin-once'
			/>
			<p>{title}</p>
		</div>
	);
};

export default Logo;
