import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage.jsx';
import Signin from './Pages/Signin.jsx';
import Login from './Pages/Login.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';
import NotFoundpage from './Pages/NotFoundpage.jsx';
import About from './Pages/About.jsx';

function App() {


  return (
  	<>
     <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/forgot-password' element={<ForgotPassword/>}/>
         <Route path='/reset-password/:resetToken' element={<ResetPassword/>}/>
         <Route path='*' element={<NotFoundpage/>}/>
         <Route path="/about" element={<About/>}/>
     </Routes>
     </>
    
  )
}

export default App;
