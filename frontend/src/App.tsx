import { useState, useReducer, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import axios from './axios';
import {Iworker} from "./Models/Model"

// const reducer = (state:any,action:any) => {
//   switch (action.type) {
//     case 'set-employees':
//       return { ...state, employees: action.employees};
//     default:
//       throw new Error (' nie ma takiej funkcji '+ action.type)
//   }
// }

// const initialState = {
//   employees: []
// }
const pracownicy:Iworker[] = [
  {
  Id: 1,
  EmpFirstname: 'Paweł',
  EmpLastname: 'Wieczorek',
  EmpPhone: '123456789'
  },
  {
    Id: 2,
    EmpFirstname: 'Dominika',
    EmpLastname: 'Fun',
    EmpPhone: '987654321'
    }
]

function App() {

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [employees, setEmployees] = useState<Iworker[]>([])
  const fetchBack = async () => {
    const resEmployees = await axios.get('/Employee');
    const employ:Iworker[] = resEmployees.data;
    setEmployees(employ)
  }

  useEffect(()=>{
    fetchBack();
 },[]);

  const [contentChange, setContent] = useState('emp')
  const menu = (<Menu
    setContent = {contentChange=>setContent(contentChange)}
  />)
  const content = (<Content 
    employees={employees}
    contentChange = {contentChange}
  />)

  return (

    <Layout
      menu = {menu}
      content = {content}
      />

  );
}

export default App;
