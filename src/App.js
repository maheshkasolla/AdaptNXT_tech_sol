import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dasbboard from './Components/Sidebar/Dasbboard';
import Inventry from './Components/Sidebar/Inventry';
import Orders from './Components/Sidebar/Orders';
import Shipping from './Components/Sidebar/Shipping';
import Channel from './Components/Sidebar/Channel';
import './App.css';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const App = () => {

  return (
    <div>
      <Router>
        <div className='flex '>
        
          <div className="flex flex-col  bg-slate-400 h-screen p-5">
            <div className='hover:bg-lime-300 rounded-full pl-2'>
              <DashboardCustomizeTwoToneIcon/>
              <Link to="Dashboard"   >Dashboard</Link>
            </div>
            <div className='hover:bg-lime-300 rounded-full pl-2' >
              <LoyaltyOutlinedIcon/>
              <Link to="Inventory"  >Inventry</Link>
         </div>
         <div className='hover:bg-lime-300 rounded-full pl-2'>
          <FilterFramesOutlinedIcon/>
          <Link to="/"  >Orders</Link>
           
         </div>
              <div className='hover:bg-lime-300 rounded-full pl-2'>
              <LocalShippingOutlinedIcon/>
              <Link to="/Shipping"  >Shipping</Link>
            </div>
            <div className='hover:bg-lime-300 rounded-full pl-2'>
              <AddShoppingCartOutlinedIcon/>
              <Link to="/Channel"  >Channel</Link>
            
            </div>
           
          </div>
          <Routes >
            <Route path="Dashboard" element={<Dasbboard />} />
            <Route path="/Inventory" element={<Inventry />} />
            <Route path="/" element={<Orders />} />
            <Route  path="Shipping" element={<Shipping/>}/>
             <Route path="Channel" element={<Channel/>}/>
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
