import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import Watchlist from './components/Watchlist/Watchlist';
import IndustryChart from "./components/Charts/IndustryChart";
import { useState } from 'react';




function App() {

	const stockList = [
		{
			name: "Dream Unlimited",
			ticker: "DRM.TO",
			industry:"Real Estate",
			targetPrice: 32,
			price: 21.23,
			day: -0.07,
			quantity: 7
		},
		{
			name: "Brookfield Asset Management",
			ticker: "BAM",
			industry:"Real Estate",
			targetPrice: 77,
			price: 49.63,
			day: -0.25,
			quantity: 11
		},
		{
			name: "SandStorm Gold",
			ticker: "SAND",
			industry:"Gold Royalties",
			targetPrice: 13,
			price: 8.92,
			day: -0.27,
			quantity: 14
		},
		{
			name: "Alibaba",
			ticker: "BABA",
			industry:"Ecommerce",
			targetPrice: 355,
			price: 211.64,
			day: -1.43,
			quantity: 3
		},
		{
			name: "Ebay",
			ticker: "EBAY",
			industry:"Ecommerce",
			targetPrice: 77,
			price: 67.13,
			day: 0.38,
			quantity: 3
		},
		{
			name: "Facebook",
			ticker: "FB",
			industry:"Online Advertising",
			targetPrice: 409,
			price: 331.26,
			day: -1.20,
			quantity: 2
		},
		{
			name: "Bitcoin",
			ticker: "BTC",
			industry:"Criptocurrency",
			targetPrice: 500000,
			price: 35451.40,
			day: -1421.94,
			quantity: 0.01671182
		},
		
	]



const [portfolio,setPortfolio] = useState(stockList)


//Delete Row
const deleteRow = (ticker:string) => {
	setPortfolio(portfolio.filter((stock) => stock.ticker !== ticker))
}

return (
	<div className="App">
		{/* Sidebar */}
		<div className="Sidebar">
			<Sidebar/>
		</div>

		<div className="Topbar">
			<Topbar portfolio={portfolio} />
		</div>
		{/* Main */}
		<div className="Main p-7">
			{/* Portfolio Container */}
			<div className="col-span-3">	
				<Portfolio name={"Cartera Principal"} portfolio={portfolio} onDelete={deleteRow}/>
			</div>

			{/* Data & Watchlist Container */}
			<div className="grid grid-cols-3 gap-4 pt-7">
				<div style={{backgroundColor: "#C4C4C4"}} className="col-span-2">
					{/* Data Grid */}
					<div className="grid grid-cols-3 gap-10 p-3">
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart portfolio={portfolio}/>
						</div>
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart portfolio={portfolio}/>
						</div>
						{/* Col1 */}
						<div className="col-span-1">
							<IndustryChart portfolio={portfolio}/>
						</div>
							
					</div>
				</div>

				<div className="col-span-1  overflow-hidden">	
					<Watchlist name={"Watchlist"} />
				</div>
			</div>

		</div>
		
	</div>
);
}

export default App;
