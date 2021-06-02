import { useState } from "react"
import './Sidebar.css';
import './../App.css';

function Sidebar() {
	
	return (
		<div className='sidebarContainer'>
			<img id="Logo" src="/logo_white.png" alt="logo" />
			<div className="button">Dashboard</div>
			<div className="button">Portfolio</div>
			<div className="button">Watchlist</div>
		
		</div>
	);
}

export default Sidebar;
