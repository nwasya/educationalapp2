
import Index from './main/Home'
import SignUp from './main/SignUp'
import SignIn from './main/SignIn'
import {CookiesProvider} from "react-cookie"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div  className="App">
      
 <CookiesProvider>
    <Router>

        <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
  
        </Routes>

      </Router>
        
 </CookiesProvider>
     

      
    </div>
  );
}

export default App;
