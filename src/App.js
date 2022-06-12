
import { Reset } from 'styled-reset'
import './App.css';
import MainPage from './pages/MainPage'; 
import DetailPage from './pages/DetailPage'; 
import ReviewPage from './pages/ReviewPage'; 

function App() {
  return (
    <div className="App">
      <Reset />
      <MainPage />
      {/* <DetailPage />
      <ReviewPage /> */}
    </div>
  );
}

export default App;
