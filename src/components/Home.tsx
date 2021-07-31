import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Portfolio from './Portfolio/Portfolio';
import './Home.css';
import Watchlist from './Watchlist/Watchlist';
import AssetTypeChart from "./Charts/AssetTypeChart";
import { useState } from 'react';
import {PortfolioType} from '../models/portfolio.interface'
import { emptyPortfolio } from '../models/emptyModels';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { State } from '../store/reducers';
import MoneyTime from './MoneyTime';
import AssetChart from './Charts/AssetChart';


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
            <Portfolio/>



            {/* Widgets Container */}
            <div className="flex gap-4 pt-7 flex-wrap">
                <div className="dataContainer flex flex-row gap-4 pt-7">
                    <div className="ChartContainer">
                        <AssetChart/>
                    </div>
                    <div className="ChartContainer">
                        <AssetTypeChart/>  
                    </div>
                            
                </div>
                
                <div className="MoneyToTime">
                    <MoneyTime />
                </div>

                <div className="overflow-hidden Watchlist">	
                    <Watchlist />
                </div>
            </div>

         
       

        </div>

    </div>
  );
}
export default Home;
