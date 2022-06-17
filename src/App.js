
import { Reset } from 'styled-reset'
import './App.css';
import MainPage from './pages/MainPage'; 
import DetailPage from './pages/DetailPage'; 
import CommunityPage from './pages/CommunityPage'; 

function App() {
  return (
    <div className="App">
      <Reset />
      <MainPage />
      {/* <DetailPage /> */}
      {/* <CommunityPage /> */}
    </div>
  );
}

export default App;
