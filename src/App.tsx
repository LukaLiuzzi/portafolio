import About from './components/About';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
				<Layout>
					<Hero />
					<About />
					<Skills />
					<Projects />
				</Layout>
			</header>
		</>
	);
}
