import { useState } from 'react';
import { Iworker } from '../../../../Models/Model';

function NewEmployee(
    props:{
    onAdd(employee: Iworker):any;
}) {

    const [newEmployee, setNewEmployee] = useState<Iworker>({
        EmpFirstname:'',
        EmpLastname:'',
        EmpPhone:'',
        Id:0
    })

     const changeFirstNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setNewEmployee({...newEmployee, EmpFirstname: value});
    }

    const changeLastNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setNewEmployee({...newEmployee, EmpLastname: value});
    }

    const changePhoneHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setNewEmployee({...newEmployee, EmpPhone: value});
    }

    const addEmployee = () => {
        const employee:Iworker = {
            EmpFirstname:newEmployee.EmpFirstname,
            EmpLastname:newEmployee.EmpLastname,
            EmpPhone:newEmployee.EmpPhone,
            Id:newEmployee.Id
        };
        props.onAdd(employee)
        setNewEmployee({
            EmpFirstname:'',
            EmpLastname:'',
            EmpPhone:'',
            Id:0
        })
    }

    return(
            <div>
            <label>Imię:</label>
            <input 
               className = "form-control"
               type="text" 
                value={newEmployee.EmpFirstname} 
                onChange={changeFirstNameHandler} />
            
            <label>Nazwisko:</label>
            <input 
            className = "form-control"
            type="text" 
             value={newEmployee.EmpLastname} 
             onChange={changeLastNameHandler} />
        
            <label>Telefon:</label>
            <input 
               className = "form-control"
               type="text" 
                value={newEmployee.EmpPhone} 
                onChange={changePhoneHandler} />
    
            <button onClick={() => addEmployee()}>Zapisz</button>
        </div>
        )
}

export default NewEmployee;