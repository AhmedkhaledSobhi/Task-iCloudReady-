import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import CustomerEngagement from './Compounant/CustomerEngagement';
import ActionableInsighets from './Actionable Insighets/Actionable Insighets';
import OperationsExcellence from './OperationsExcellence/OperationsExcellence';
import EmployeesProductivity from './EmployeesProductivity/EmployeesProductivity';
import SlideNave from './SlideNave/SlideNave';

function App() {
  return (
    <>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='SlideNave' element={<SlideNave/>}/>
       
        <Route path='CustomerEngagement' element={<CustomerEngagement/>}/>
        <Route path='ActionableInsighets' element={<ActionableInsighets/>}/>
        <Route path='EmployeesProductivity' element={<EmployeesProductivity/>}/>
        <Route path='OperationsExcellence' element={<OperationsExcellence/>}/>
        
      </Routes>

      
    </>
  );
}

export default App;


 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Ahmed</h1>
      </header> */}