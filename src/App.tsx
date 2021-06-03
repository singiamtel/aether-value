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
		<div className="Main ">

			<div className="Topbar">
			</div>

			{/* Grid */}
			<div id="Dashboard" className="grid grid-cols-3 grid-rows-3 gap-4 p-7">
				<div className="col-span-3 row-span-2">	
					<Portfolio/>
				</div>
				<div style={{backgroundColor: "#C4C4C4"}} className="col-span-2 row-span-1">	
				
				</div>

				<div style={{backgroundColor: "#C4C4C4"}} className="col-span-1 row-span-1">	
				
				</div>

			</div>
		</div>
	
	</div>
);
}

export default App;
