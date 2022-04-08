
import Index from './main/Home'
import SignUp from './main/SignUp'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div  className="App">
      
 
      <Router>

        <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
  
        </Routes>

      </Router>
        

      
    </div>
  );
}

export default App;
