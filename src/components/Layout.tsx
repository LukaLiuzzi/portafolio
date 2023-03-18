import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text pt-20'>
			<div className='max-w-4xl mx-auto px-4'>{children}</div>
		</div>
	);
};

export default Layout;
