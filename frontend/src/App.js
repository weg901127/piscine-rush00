import React from "react";
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import NavBar from './component/NavBar';
import axios from "axios";
import firebase from './firebase';
import './App.css'
import Routes from "./component/Routes";
axios.defaults.baseURL = "http://127.0.0.1:3001";
axios.defaults.withCredentials = true;
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
console.log(firebase);
function App() {

  return (
<>
    <GlobalStyle />
    <section className='App'>
      <NavBar />
      <Template>
        <Routes />
      </Template> 
    </section>
</>
  );
}

export default App;
