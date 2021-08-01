import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { useState } from 'react';
import Transactions from './Transactions';


function TransactionsPage() {

const [descending,setDescending] = useState([false, false, false, false, false, false, false, false, false])
	
return (
	<div className="Home">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar activeElement="Transactions"/>
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
