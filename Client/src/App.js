import logo from './logo.svg';
import './App.css';



import BookDisplay from './BookDisplay';
import Registration from './Registration';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Dashboard from './Dashboard';
import Home from './Home';
import Admin from './Admin';
import Userdata from './Userdata';
import Userinfo from './Userinfo';
import Cards from './Cards'
import Contact from './Contact';
import Adminlogin from './Adminlogin';
import AdminRegistrationPage from './AdminRegistrationPage';
import BookDetails from './BookDetails';
function App() {
 return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
        
        </Route>
        <Route path="/registration" element={<Register/>}></Route>
        <Route path="/admin" element={<Admin/>}>
        
        </Route>
        <Route path="/adminlogin" element={<Adminlogin/>}>
        
        </Route>
      
      
        <Route path="users" element={<Userdata/>}></Route>
        <Route path="userinfo" element={<Userinfo/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/cards' element={<Cards/>} />
        <Route path='/adregister' element={<AdminRegistrationPage/>} />
        <Route path="/books/:authorName" element={<BookDetails/>} />
        <Route path="/books/:category" element={<BookDetails/>} />
        
        
       
      
        
      </Routes>
    </BrowserRouter>
   
    </>
 )
}

export default App;
