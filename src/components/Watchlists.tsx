import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Portfolio from './Portfolio/Portfolio';
import './Watchlists.css';
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


function Watchlists() {

  return (
    <div className="Home">
        {/* Sidebar */}
        <div className="Sidebar">
            <Sidebar activeElement="Watchlists"/>
        </div>

        <header className="Topbar">
            <Topbar/>
        </header>
        {/* Main */}
        <div className="Main p-7">

            {/* Widgets Container */}
            <div className="flex gap-4 flex-wrap"> 
                
                

                {JSON.parse(sessionStorage.getItem('wallets')!).map((wallet:any,key:number) => (
                <div className="overflow-hidden Watchlist">	
                    <Watchlist index={key}/>
                </div>
                ))}
            </div>

         
       

        </div>

    </div>
  );
}
export default Watchlists;
