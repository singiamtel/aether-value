import './Sidebar.css';
import '../Home.css';
import { RiWallet2Line } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import {BsListNested} from "react-icons/bs";
import { Link } from 'react-router-dom';
import DropdownPortfolio from './DropdownPortfolio';
import Quotes from '../Quotes';

type SidebarProps ={
	activeElement: string,
}

function Sidebar({activeElement}:SidebarProps) {
	
	return (
		<div className='sidebarContainer'>
			<img id="Logo" src="/logo_white.png" alt="logo" />
			
			<div className="flex items-center justify-center">
					<DropdownPortfolio />
			</div>
			<Link to="/Home">
			<button className={activeElement === "Dashboard" ? "active": "btn"}>
				<div className="px-7">
					<RiDashboardFill style={{fontSize:30}}/>
				</div>
				Dashboard
			</button>
			</Link>
			<Link to="/Portfolio">
			<button className="btn">
				<div className="px-7">
					<RiWallet2Line style={{fontSize:30}}/>
				</div>
				Portfolio
			</button>
			</Link>
			<Link to="/Watchlists">
			<button className={activeElement === "Watchlists" ? "active": "btn"}>
				<div className="px-7">
					<FaRegEye style={{fontSize:30}}/>
				</div>
				Watchlist
			</button>
			</Link>
			<Link to="/Transactions">
				<button className={activeElement === "Transactions" ? "active": "btn"}>
				<div className="px-7">
					<BsListNested style={{fontSize:30}}/>
				</div>
				Transactions
				</button>
			</Link>

		</div>
	);
}

export default Sidebar;
