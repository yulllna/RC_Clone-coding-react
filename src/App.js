
// import { Reset } from 'styled-reset'
import './App.css';
import MainPage from './pages/MainPage'; 
import DetailPage from './pages/DetailPage'; 
import CommunityPage from './pages/CommunityPage'; 
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      {/* <Reset /> */}
      {/* <MainPage /> */}
      <DetailPage />
      {/* <CommunityPage /> */}
    </div>
  );
}

export default App;
