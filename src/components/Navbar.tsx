import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			// If the menu is open, close it when the user scrolls
			if (isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		// Remove the event listener when the component unmounts
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isOpen]);

	return (
		<nav className='flex px-4 shadow-md items-center md:justify-around md:h-20 bg-light-primary dark:bg-dark-primary md:dark:bg-dark-primary/90 dark:text-dark-text fixed top-0 left-0 w-full md:backdrop-blur-md z-50'>
			<div className='text-lg font-bold md:py-0 py-4'>
				<a href='#home'>
					<img
						src='/logo.svg'
						alt='Logo Luka Liuzzi'
						className='w-12 rounded-full'
					/>
				</a>
			</div>

			{/* Button to show/hide menu */}
			<div
				className='ml-auto md:hidden dark:text-dark-secondary cursor-pointer'
				onClick={toggleMenu}
			>
				{
					// If menu is open, show the "X" icon
					isOpen ? (
						<IoClose className='text-3xl' />
					) : (
						<GiHamburgerMenu className='text-3xl' />
					)
				}
			</div>

			{/* Menu links */}
			<ul
				className={`${
					isOpen ? 'block' : 'hidden'
				} md:px-2 md:flex md:space-x-2 fixed left-0 top-20 right-0 bottom-0 md:relative md:top-0 font-bold text-xl uppercase bg-light-primary dark:bg-dark-primary md:bg-transparent md:dark:bg-transparent`}
			>
				<li className='flex md:inline-flex items-center justify-center'>
					<a href='#about' className='p-4 hover:opacity-60 cursor-pointer'>
						Sobre mi
					</a>
				</li>
				<li className='flex md:inline-flex items-center justify-center'>
					<a href='#skills' className='p-4 hover:opacity-60 cursor-pointer'>
						Skills
					</a>
				</li>
				<li className='flex md:inline-flex items-center justify-center'>
					<a href='#projects' className='p-4 hover:opacity-60 cursor-pointer'>
						Proyectos
					</a>
				</li>
				<li className='flex md:inline-flex items-center justify-center'>
					<a href='#process' className='p-4 hover:opacity-60 cursor-pointer'>
						Proceso
					</a>
				</li>
				<li className='flex md:inline-flex items-center justify-center'>
					<a href='#contact' className='p-4 hover:opacity-60 cursor-pointer'>
						Contacto
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
