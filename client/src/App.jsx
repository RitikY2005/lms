import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage.jsx';
import Signin from './Pages/Signin.jsx';
import Login from './Pages/Login.jsx';

function App() {


  return (
  	<>
     <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/login' element={<Login/>}/>
     </Routes>
     </>
    
  )
}

export default App;
