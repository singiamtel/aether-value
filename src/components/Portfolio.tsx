import './Portfolio.css';
import PortfolioRow from "./PortfolioRow";

function Portfolio() {
	
	return (
		<div className='PortfolioContainer'>
			<div className='Header'>
				<div className="item">Stock</div>
				<div className="item">Ticker</div>
				<div className="item">Market</div>
				<div className="item">Price</div>
				<div className="item">Quantity</div>
				<div className="item">Total</div>
			</div>
			<div className="body">
				<PortfolioRow stock={"Apple"} ticker={"AAPL"} market={"NYSE"} price={125.06}  quantity={10}/>
				<PortfolioRow stock={"Facebook"} ticker={"FB"} market={"NYSE"} price={329.01}  quantity={5}/>
				<PortfolioRow stock={"Bitcoin"} ticker={"BTC"} market={"???"} price={37000.30}  quantity={1}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				<PortfolioRow stock={""} ticker={""} market={""} price={0}  quantity={0}/>
				
			</div>
		</div>
	);
}

export default Portfolio;
