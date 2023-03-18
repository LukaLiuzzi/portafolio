import { useState } from 'react';
import Logo from '../assets/yo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='flex px-4 shadow-md items-center md:justify-around md:h-20 sticky w-full'>
			<div className='text-lg font-bold md:py-0 py-4'>
				<img src={Logo} alt='Logo' className='w-12 rounded-full' />
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
				} md:px-2 md:flex md:space-x-2 absolute md:relative top-full md:top-auto left-0 right-0 font-bold text-xl uppercase bg-light-primary dark:bg-dark-primary z-50`}
			>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#'>
						<span>Sobre mi</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#'>
						<span>Skills</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#'>
						<span>Proyectos</span>
					</a>
				</li>
				<li className='flex md:inline-flex p-4 items-center justify-center'>
					<a href='#'>
						<span>Proceso</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
