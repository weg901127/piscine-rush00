import React from "react";
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import NavBar from './component/NavBar';
import axios from "axios";
import firebase from './firebase';
import './App.css'
import Routes from "./component/Routes";
import { CookiesProvider } from 'react-cookie';
//axios.defaults.baseURL = "http://127.0.0.1:3001";
//axios.defaults.withCredentials = true;
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
console.log(firebase);
function App() {

  return (
<>
    <CookiesProvider>
    <GlobalStyle />
    <section className='App'>
      <NavBar />
      <Template>
        <Routes />
      </Template> 
    </section>
    </CookiesProvider>
</>
  );
}

export default App;
