import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Portfolio from './components/Portfolio/Portfolio';
import './Home.css';
import Watchlist from './components/Watchlist/Watchlist';
import IndustryChart from "./components/Charts/IndustryChart";
import { useState, useEffect } from 'react';
import { GetPortfolioContents, GetTransactions } from './api/getEndpoints';
import {PortfolioType, TransactionType} from './models/portfolio.interface'

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
          "open": "0",
          "close": "0"
        },
        {
          "datetime": "",
          "open":"0",
          "close": "0"
        }
      ],
      "status": ""
    }
  }
]

const emptyTransactions: TransactionType[] = [
  {
    "id": 0,
    "asset": "",
    "amount": 0,
    "open_price": 0,
    "date": ""
  }
]



function Home() {

  //Llama a al backend y nos devuelve un portfolio (Según el índice dado)
  const getPortfolio: any = async (activePortfolio:number, activeWatchlist:number) => {
    const token = sessionStorage.getItem("token")!
    const walletName = JSON.parse(sessionStorage.getItem('wallets')!)[activePortfolio].name
    const watchlistName = JSON.parse(sessionStorage.getItem('wallets')!)[activeWatchlist].name

    let resWallet = await GetPortfolioContents(token, walletName)
    let resWatchlist = await GetPortfolioContents(token, watchlistName)
    let resHistory = await GetTransactions(token, walletName)
    
    setPortfolio(resWallet.wallet)
    setWatchlist(resWatchlist.wallet)
    setTransactions(resHistory.history)
  }


  //Declaración de variables
  const [portfolio,setPortfolio] = useState<PortfolioType[]>(emptyPortfolio)
  const [watchlist,setWatchlist] = useState<PortfolioType[]>(emptyPortfolio)
  const [transactions,setTransactions] = useState<TransactionType[]>(emptyTransactions)
  let totalPortfolio = 0
  let activePortfolio = 0
  let activeWatchlist = 1
  
  //Para actualizar el componente cuando el backend nos devuelva el portfolio
  useEffect(() => {
    getPortfolio(activePortfolio,activeWatchlist)
  }, [])
  useEffect(() => {
    portfolio.map((stock) => (totalPortfolio += stock.amount * parseFloat(stock.api.values[0].close)))
  }, [portfolio])

  return (
    <div className="Home">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement="Dashboard"/>
      </div>

      <header className="Topbar">
        <Topbar portfolio={portfolio} transactions={transactions}/>
      </header>
      {/* Main */}
      <div className="Main p-7">
        <Portfolio portfolio={portfolio} transactions={transactions}/>



        {/* Data & Watchlist Container */}
        <div className="grid grid-cols-5 gap-4 pt-7">
          <div className="dataContainer col-span-3">
            <div className="grid grid-cols-3 gap-10 p-3">
              <div className="col-span-1">
                <IndustryChart portfolio={portfolio}/>
              </div>

            </div>
          </div>

          <div className="col-span-2 overflow-hidden">	
            <Watchlist name={JSON.parse(sessionStorage.getItem('wallets')!)[activeWatchlist].name} watchlist={watchlist}/>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
