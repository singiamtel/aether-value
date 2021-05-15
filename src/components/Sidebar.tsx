import { useState } from "react"
// import './sidebar.css';

function Sidebar() {
	const [a, setA] = useState(0)
	setTimeout(() =>{
		setA(7)
	}, 3500)
	return (
		<div>
			{a}
		</div>
	);
}

export default Sidebar;
