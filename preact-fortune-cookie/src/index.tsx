import { render } from 'preact';
import { LocationProvider, Route, Router } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { HongBao } from './pages/_hongbao.js';
import { LunarYear } from './pages/_lunaryear.js';
import { Overview } from './pages/_overview.js';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
					<Route path="/hongbao" component={HongBao} />
					<Route path="/lunaryear" component={LunarYear} />
					<Route path="/overview" component={Overview} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
