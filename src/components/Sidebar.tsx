import './Sidebar.css';
import './../App.css';

function Sidebar() {
	
	return (
		<div className='sidebarContainer'>
			<img id="Logo" src="/logo_white.png" alt="logo" />
			<button className="btn">Dashboard</button>
			<button className="btn">Portfolio</button>
			<button className="btn">Watchlist</button>
		
		</div>
	);
}

export default Sidebar;
