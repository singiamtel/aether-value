import { useState } from "react"
import './Sidebar.css';

function Sidebar() {
	
	return (
		<div className='sidebarContainer'>
			<img id="Logo" src="/logo_white.png" alt="logo" />
			<div className="button">Dashboard</div>
		</div>
	);
}

export default Sidebar;
