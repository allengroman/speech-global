import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import DarkSignIn from './components/dark-signin';
import DarkSignUp from './components/dark-signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/channel-sign-in' element={ <DarkSignIn/> } />
        <Route path='/channel-sign-up' element={ <DarkSignUp/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
