import './Sidebar.css';
import './../App.css';
import { RiWallet2Line } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";


function Sidebar() {
	
	return (
		<div className='sidebarContainer'>
			<img id="Logo" src="/logo_white.png" alt="logo" />
			<button className="active">
				<div className="px-7">
					<RiDashboardFill style={{fontSize:30}}/>
				</div>
				Dashboard
			</button>
			<button className="btn">
				<div className="px-7">
					<RiWallet2Line style={{fontSize:30}}/>
				</div>
				Portfolio</button>
			<button className="btn">
				<div className="px-7">
					<FaRegEye style={{fontSize:30}}/>
				</div>
				Watchlist</button>
		
		</div>
	);
}

export default Sidebar;
