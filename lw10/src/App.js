import './css/App.scss';
import GiphyList from './components/GiphyList/GiphyList.jsx';
import Search from './components/Search/Search.jsx';

function App() {
	return (
		<div className="container">
			<Search />
			<GiphyList />
		</div>
	);
}

export default App;
