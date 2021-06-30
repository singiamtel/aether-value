import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Portfolio from './components/Portfolio/Portfolio';
import './Home.css';
import Watchlist from './components/Watchlist/Watchlist';
import IndustryChart from "./components/Charts/IndustryChart";
import { useState, useEffect } from 'react';
import { GetPortfolioContents } from './api/getEndpoints';
import {PortfolioType} from './models/portfolio.interface'

const emptyPortfolio:PortfolioType[] = [
  {
    "amount": 0,
    "targetPrice": 0,
    "api": {
      "meta": {
        "symbol": "",
        "currency": "",
        "exchange": "",
        "type": ""
      },
      "values": [
        {
          "datetime": "",
          "open": 0,
          "close": 0
        },
        {
          "datetime": "",
          "open":0,
          "close": 0
        }
      ],
      "status": ""
    }
  }
]

function Home() {

  //Llama a al backend y nos devuelve un portfolio (Según el índice dado)
  const getPortfolio: any = async (index:number) => {
    let response = await GetPortfolioContents(sessionStorage.getItem("token")!, JSON.parse(sessionStorage.getItem('wallets')!)[index].name)
    console.log(response.wallet)
    setPortfolio(response.wallet)
  }

  //Declaración de variables
  const [portfolio,setPortfolio] = useState<PortfolioType[]>(emptyPortfolio)
  let totalPortfolio = 0
  let activePortfolio = 0
  
  //Para actualizar el componente cuando el backend nos devuelva el portfolio
  useEffect(() => {
    getPortfolio(activePortfolio)
  }, [])
  useEffect(() => {
    portfolio.map((stock) => (totalPortfolio += stock.amount * stock.api.values[0].close))
  }, [portfolio])

  return (
    <div className="Home">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement="Dashboard"/>
      </div>

      <header className="Topbar">
        <Topbar portfolio={portfolio} />
      </header>
      {/* Main */}
      <div className="Main p-7">
        <Portfolio portfolio={portfolio}/>



        {/* Data & Watchlist Container */}
        <div className="grid grid-cols-3 gap-4 pt-7">
          <div className="dataContainer col-span-2">
            <div className="grid grid-cols-3 gap-10 p-3">
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

export default Home;
