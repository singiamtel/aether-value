import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <div className="Sidebar">
        <Sidebar/>
      </div>

      {/* Main */}
      <div className="Main">
        <header className="Topbar">
        </header>
  
        <div className="Portfolio">
        </div>


        <div className="Data">
        </div>

        <div className="Watchlist">
        </div>


      </div>
      
    </div>
  );
}

export default App;
