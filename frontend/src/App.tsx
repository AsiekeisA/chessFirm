import { useState, useReducer, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import axios from './axios';
import {Iworker, Idepart, IdepWork} from "./Models/Model"

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
  const [departments, setDepartments] = useState<Idepart[]>([])
  const [depWorkers, setDepWorkers] = useState<IdepWork[]>([])
  
  const fetchBack = async () => {
    const resEmployees = await axios.get('/Employee');
    const resDepartments = await axios.get('/Department');
    const resDepWorker = await axios.get('/DepWorker');
    const employ:Iworker[] = resEmployees.data;
    const depart:Idepart[] = resDepartments.data;
    const depWork:IdepWork[] = resDepWorker.data;
    setEmployees(employ)
    setDepartments(depart)
    setDepWorkers(depWork)
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
    departments={departments}
    depWorkers={depWorkers}
    setEmployees={setEmployees}
    setDepartments={setDepartments}
    setDepWorkers={setDepWorkers}
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
