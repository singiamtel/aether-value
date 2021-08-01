import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import Portfolio from './Portfolio/Portfolio';
import './Home.css';
import Watchlist from './Watchlist/Watchlist';
import AssetTypeChart from "./Charts/AssetTypeChart";
import MoneyTime from './MoneyTime';
import AssetChart from './Charts/AssetChart';
import AssetIndustryChart from './Charts/AssetIndustryChart';
import NetWorthChart from './Charts/NetWorthChart';
import Quotes from './Quotes';


function Home() {

  return (
    <div className="Home">
        {/* Sidebar */}
        <div className="Sidebar">
        <Sidebar activeElement="Dashboard"/>
        </div>

        <header className="Topbar">
        <Topbar/>
        </header>
        {/* Main */}
        <div className="Main p-7">
            <div className=" text-center cursor-default w-full italic py-4 shadow-lg ring-1  ring-gray-800">
                    <Quotes />
            </div>
            <div className="my-7">
                <Portfolio/>
            </div>
            
            
            {/* Widgets Container */}
            <div className="flex gap-4 flex-wrap">
                <div className="dataContainer flex flex-row gap-4 pt-7">
                    <div className="ChartContainer">
                        <AssetChart/>
                    </div>
                    <div className="ChartContainer">
                        <AssetTypeChart/>  
                    </div>
                    <div className="ChartContainer">
                        <AssetIndustryChart/>  
                    </div>        
                </div>
                
                <div className="MoneyToTime">
                    <MoneyTime />
                </div>

                <div className="overflow-hidden WatchlistHome">	
                    <Watchlist />
                </div>

                {/* <div className="overflow-hidden">	
                    <NetWorthChart />
                </div> */}

                
            </div>

         
       
            
        </div>
        
    </div>
  );
}
export default Home;
