import './MoneyTime.css';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/store';




function MoneyTime() {

  
  let totalPortfolio = useSelector((state:State) => state.portfolioTotal)
	let dollarHour = useSelector((state:State) => state.settings[0])


  const calculateDollarTime = (dollarHour:number) => {
    hours = totalPortfolio/dollarHour
    days = hours/24
    weeks = days/7
    months = weeks/4
    years = months/12 
    decades = years/10
  }

  let hours = 0, days = 0, weeks = 0, months = 0, years = 0, decades = 0
  calculateDollarTime(dollarHour)

	

  return (
          <div className="flex flex-col hoursContainer">
            <div className="col-span-1 w-full p-7 grid grid-cols-2 grid-rows-3 gap-4 text-3xl">
              <p className={"px-4 text-black"}>
              {hours.toFixed(2)} <p className="text-sm">hours</p>
              </p>
              <p className={"px-4 text-black"}>
              {days.toFixed(2)} <p className="text-sm">days</p>
              </p>
              <p className={"px-4 text-black"}>
              {weeks.toFixed(2)} <p className="text-sm">weeks</p>
              </p>
              <p className={"px-4 text-black"}>
              {months.toFixed(2)} <p className="text-sm">months</p>
              </p>
              <p className={"px-4 text-black"}>
              {years.toFixed(2)} <p className="text-sm">years</p>
              </p>
              <p className={"px-4 text-black"}>
              {decades.toFixed(2)} <p className="text-sm">decades</p>
              </p>
            </div>
            <p className="pb-4 text-xm">
            Assuming ${dollarHour} / Hour
              <p className=" text-gray-600 text-xs"><i>(This can be changed in options)</i></p>
            </p>
          </div>
  );
}
export default MoneyTime;
