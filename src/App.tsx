import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import './App.css';
import Watchlist from './components/Watchlist';
import IndustryChart from "./components/Charts/IndustryChart";

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
			<div id="Dashboard" className="grid grid-cols-3 grid-rows-5 gap-4 p-7">
				<div className="col-span-3 row-span-3 overflow-hidden">	
					<Portfolio name={"Cartera Principal"} />
				</div>

				<div style={{backgroundColor: "#C4C4C4"}} className="col-span-2 row-span-2 overflow-hidden">
					{/* Data Grid */}
					<div className="grid grid-cols-3 gap-10 p-3">
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart />
						</div>
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart />
						</div>
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart />
						</div>
							
					</div>
				</div>

				<div className="col-span-1 row-span-2 overflow-hidden">	
					<Watchlist name={"Watchlist"} />
				</div>

			</div>
		</div>
	</div>
);
}

export default App;
