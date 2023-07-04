import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
/*import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth';

*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Signup from "./components/Auth/Signup";
import Documentation from "./components/Documentation/Documentation";
import EmailVerify from "./components/EmailVerify/index";
import Login from "./components/Login";

const App = () => {
  return (
    <GoogleOAuthProvider clientId='127227223820-0e5csflsm8adhp037adn81dtlvaanm5m.apps.googleusercontent.com' >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/doc" element={<Documentation />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
