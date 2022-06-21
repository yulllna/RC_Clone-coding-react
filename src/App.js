import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage'; 
import DetailPage from './pages/DetailPage'; 
import CommunityPage from './pages/CommunityPage'; 
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/detail" element={<DetailPage />}/>
        <Route path="/community" element={<CommunityPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
