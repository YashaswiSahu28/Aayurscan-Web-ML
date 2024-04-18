import './App.css';
// import Sidenav from './Sidenav';
// import Box from '@mui/material/Box';
// import ImageScanner from './Components/ImageScanner';
// import { Typography } from '@mui/material';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from './pages/Home';
import Floraspot from "./pages/Floraspot";
import Settings from "./pages/Settings";
import History from "./pages/History";
import Plantplay from './pages/Plantplay';
import FloraForum from './pages/Floraforum';
import Result from './pages/Result';


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage/>}></Route>
      <Route path="/history" exact element={<History />}></Route>
      <Route path="/settings" exact element={<Settings />}></Route>
      <Route path="/floraforum" exact element={<FloraForum/>}></Route>
      <Route path="/plantplay" exact element={<Plantplay/>}></Route>
      <Route path="/floraspot" exact element={<Floraspot/>}></Route>
      <Route path="/result" exact element={<Result/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </> 
  )
  
}

export default App;
