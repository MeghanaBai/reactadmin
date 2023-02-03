import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Authority from './components/Authority';
import Lic from './components/Lic';
import Pre from './components/Pre';
import Reg from './components/Reg';
import Report from './components/Report';
import Viewlicform from './components/Viewlicform';
import Viewpreform from './components/Viewpreform';
import Viewregform from './components/Viewregform';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Authority />}></Route>
      <Route path='Lic' element={<Lic />}></Route>
      <Route path='Pre' element={<Pre />}></Route>
      <Route path='Reg' element={<Reg />}></Route>
      <Route path='Report' element={<Report />}></Route>
      <Route path='Viewlicform' element={<Viewlicform />}></Route>
      <Route path='Viewpreform' element={<Viewpreform />}></Route>
      <Route path='Viewregform' element={<Viewregform />}></Route>
      
    </Routes>
     
    </>
  );
}

export default App;
