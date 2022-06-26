import React from 'react';
import axios from './axios';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';

function App() {
const menu = (<Menu/>)
const content = (<Content/>)

  return (
    <Layout
      menu = {menu}
      content = {content}
    />
  );
}

export default App;
