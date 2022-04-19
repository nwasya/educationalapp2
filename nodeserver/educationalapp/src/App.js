
import Index from './main/Home'
import SignUp from './main/SignUp'
import SignIn from './main/SignIn'
import {CookiesProvider} from "react-cookie"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div  className="App">

    <Router>

        <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
  
        </Routes>

      </Router>


      
    </div>
  );
}

export default App;
