import HomePage from './portfolioFiles/homePage';
import SideBar from './portfolioFiles/sideBar';

import './App.css';

function App() {
  return (
    <div className='app-container'>
      <SideBar className='sidebar'/>
      <HomePage className='homepage'/>
    </div>
  );
}

export default App;
