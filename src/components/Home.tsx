import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Portfolio from './Portfolio/Portfolio';
import './Home.css';
import Watchlist from './Watchlist/Watchlist';
import IndustryChart from "./Charts/IndustryChart";
import { useState } from 'react';
import {PortfolioType} from '../models/portfolio.interface'
import { emptyPortfolio } from '../models/emptyModels';


function Home() {

  /* const calculateDollarTime = () => {
    hours = totalPortfolio/dollarHour
    days = 24/hours
    weeks = 7/days
    months = 4/weeks
    years = 12 / months
    decades = 10 / years
  } */

  /* let dollarHour = 10, hours = 0, days = 0, weeks = 0, months = 0, years = 0, decades = 0 */
  /* calculateDollarTime() */


  //Declaración de variables
  const [watchlist,setWatchlist] = useState<PortfolioType[]>(emptyPortfolio)
  let activeWatchlist = 1
 

	

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



        {/* Data & Watchlist Container */}
        <div className="grid grid-cols-5 gap-4 pt-7">
          <div className="dataContainer col-span-3">
            <div className="grid grid-cols-3 gap-10 p-3">
              <div className="col-span-1">
                <IndustryChart/>
              </div>

            </div>
          </div>

          <div className="col-span-2 overflow-hidden">	
            {/* <Watchlist name={JSON.parse(sessionStorage.getItem('wallets')!)[activeWatchlist].name} watchlist={watchlist}/> */}
          </div>
        </div>

        
        {/* Money to time*/}
        {/* <div className="grid grid-cols-4 gap-4 pt-7 ">
          <div className="hoursContainer col-span-1 w-full">
            <h1><u>Money to time conversion</u></h1>

            <Formik 
						initialValues={{
							dollarsHour:10,
						}}
						
						onSubmit={calculateDollarTime}
					>	
						<Form className="flex flex-col items-center">
							<p className={"px-4 py-2 text-black flex flex-col items-start w-3/4"}>
							<label className="text-sm font-bold  p-1" htmlFor="dollarsHour">$/Hour </label>
							<Field className="border p-2 w-full" name="dollarsHour" placeholder="10" />
							</p>


							<p className={"px-4 py-6 text-black flex justify-center w-3/4"}>
								<button className="flex justify-center items-center submitButton p-2" type="submit">
									<p className="text-xm">Calculate my time equity!</p>
								</button>
							</p>
						</Form>
						
					</Formik>

          </div>
          <div className="hoursContainer col-span-1 w-full">
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {hours} hours
            </p>
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {days} days
            </p>
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {weeks} weeks
            </p>
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {months} months
            </p>
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {years} years
            </p>
            <p className={"px-4 text-black flex flex-col items-start w-3/4"}>
            {decades} decades
            </p>
          </div>
        </div> */}

      </div>

    </div>
  );
}
export default Home;
