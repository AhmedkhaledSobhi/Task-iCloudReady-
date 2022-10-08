// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import OperationsExcellence from './OperationsExcellence/OperationsExcellence';
import EmployeesProductivity from './EmployeesProductivity/EmployeesProductivity';
import SlideNave from './SlideNave/SlideNave';

import CustomerEngagement from './Customer/CustomerEngagement';

import Actionable from './Actionable/Actionable';

export default function App() {
  return (
    <>
      <Navbar/>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='SlideNave' element={<SlideNave/>}/>
        
          <Route path='CustomerEngagement' element={<CustomerEngagement/>}/>
          <Route path='Actionable' element={<Actionable/>}/>
          <Route path='EmployeesProductivity' element={<EmployeesProductivity/>}/>
          <Route path='OperationsExcellence' element={<OperationsExcellence/>}/>
          
        </Routes>      
    </>
  );
}