import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import DarkSignIn from './components/dark-signin';
import DarkSignUp from './components/dark-signup';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import DarkStreamCard from './components/dark-stream-card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/channel-sign-in' element={ <DarkSignIn/> } />
        <Route path='/channel-sign-up' element={ <DarkSignUp/> } />
        <Route path='/user-sign-in' element={ <SignIn/> } />
        <Route path='/user-sign-up' element={ <SignUp/> } />
        <Route path='/join' element={ <DarkStreamCard/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
