interface SectionWrapperProps {
	children: React.ReactNode;
	id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
	return (
		<section className='pt-20' id={id}>
			{children}
		</section>
	);
};

export default SectionWrapper;
