import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage.jsx';

function App() {


  return (
  	<>
     <Routes>
         <Route path="/" element={<Homepage/>}/>
     </Routes>
     </>
    
  )
}

export default App;
