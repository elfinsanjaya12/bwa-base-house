import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import DetailPage from './pages/detail';
import Navbar from './components/Navbar';
import Chat from './pages/chat';
import Payment from './pages/payment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/detail/:id' element={<DetailPage />}></Route>
        <Route path='/chat/:id' element={<Chat />}></Route>
        <Route path='/payment/:id' element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
