import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<>
			<div className='min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text'>
				<header>
					<Navbar />
					<Hero />
				</header>
			</div>
		</>
	);
}
