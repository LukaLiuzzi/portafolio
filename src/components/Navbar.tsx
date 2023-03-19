import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
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
		<nav className='flex px-4 shadow-md items-center md:justify-around md:h-20 dark:bg-dark-primary md:dark:bg-dark-primary/90 dark:text-dark-text fixed top-0 left-0 w-full md:backdrop-blur-md z-50'>
			<div className='text-lg font-bold md:py-0 py-4'>
				<a href='#home'>
					<img
						src={Logo}
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
				} md:px-2 md:flex md:space-x-2 absolute md:relative top-full md:top-auto left-0 right-0 font-bold text-xl uppercase bg-light-primary dark:bg-dark-primary md:bg-transparent md:dark:bg-transparent`}
			>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#about'>
						<span>Sobre mi</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#skills'>
						<span>Skills</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#projects'>
						<span>Proyectos</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#process'>
						<span>Proceso</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#contact'>
						<span>Contacto</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
