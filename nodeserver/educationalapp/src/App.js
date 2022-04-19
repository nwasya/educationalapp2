
import Index from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

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
