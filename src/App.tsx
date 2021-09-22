import './App.scss';
import TopNavBar from './components/nav_bar/TopNavBar';
import Content from './components/content';
import SmoothScroll from './utils/smooth_scroll/SmoothScroll';

function App() {
	return (
		<div className="app">
			<TopNavBar />
			<div className="content">
				<SmoothScroll>
					<Content />
				</SmoothScroll>
			</div>
		</div>
	);
}

export default App;
