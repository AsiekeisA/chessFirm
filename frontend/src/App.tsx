import { useState, useReducer, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import axios from './axios';

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

function App() {

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [employees, setEmployees] = useState([{}])
  const fetchBack = async () => {
    const resEmployees = await axios.get('/Employee');
    const employ = resEmployees.data;
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
