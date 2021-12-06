import './App.css';
import AddEmployee from './Components/AddEmployee';
import AllEmployees from './Components/AllEmployees';
import ViewEmployee from './Components/ViewEmployee';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EditEmployee from './Components/EditEmployee';

import NotFound from './Components/NotFound';

function App() {
  return (
   
    <BrowserRouter>
     <NavBar/>
     <Routes> 
     <Route exact path="/" element={<Home />}/>
     <Route exact path="/all-employee" element={<AllEmployees />}/>
     <Route exact  path="/add-employee" element={<AddEmployee />}/>
     <Route exact  path="/edit-employee/:_id" element={<EditEmployee />}/>
     <Route exact  path="/view-employee/:_id" element={<ViewEmployee />}/>
     
     <Route path="*" element={<NotFound />} />

     
    </Routes> 
    
     
    
    </BrowserRouter>      
   
  );
}

export default App;

