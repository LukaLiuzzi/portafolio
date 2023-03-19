import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
	return (
		<>
			<header id='home'>
				<Navbar />
				<Layout>
					<Hero />
					<main>
						<About />
						<Skills />
						<Projects />
						<Process />
						<Contact />
					</main>
					<footer></footer>
				</Layout>
			</header>
		</>
	);
}
