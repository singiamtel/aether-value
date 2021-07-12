import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { useState } from 'react';
import Transactions from './Transactions';


function TransactionsPage() {

const [descending,setDescending] = useState([false, false, false, false, false, false, false, false, false])
const [activePortfolio, setActivePortfolio] = useState(0)
	
return (
	<div className="Home">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement="Transactions" activePortfolio={activePortfolio} setActivePortfolio={setActivePortfolio}/>
      </div>

      <header className="Topbar">
        <Topbar />
      </header>
      {/* Main */}
      <div className="Main p-7">
        <Transactions descending={descending} setDescending={setDescending}/>
	  </div>
    </div>
);
}
export default TransactionsPage;
