import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
return (
	<div className="App">
		{/* Sidebar */}
		<div className="Sidebar">
			<Sidebar/>
		</div>

		{/* Main */}
		<div className="Main">

			<div className="Topbar">
			</div>

			{/* Grid */}
			<div className="Grid">

				<div className="Portfolio">
					<Portfolio/>
				</div>


				<div className="Data">		
				</div>

				<div className="Watchlist">	
				</div>

			</div>
		</div>
	
	</div>
);
}

export default App;
