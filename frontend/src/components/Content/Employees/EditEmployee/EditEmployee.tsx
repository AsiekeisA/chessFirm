import { useState } from 'react';
import {Iworker} from '../../../../Models/Model'

export default function EditEmployee(
    props:{
    onEdit(employee: Iworker):any;
    EmpFirstname:string;
    EmpLastname:string;
    EmpPhone:string;
    Id:number;
}
) {

    const [editEmployee, setEditEmployee] = useState<Iworker>({
            Id: props.Id,
            EmpFirstname: props.EmpFirstname,
            EmpLastname: props.EmpLastname,
            EmpPhone: props.EmpPhone
            })

    const changeFirstNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setEditEmployee({...editEmployee, EmpFirstname: value});
    }

    const changeLastNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setEditEmployee({...editEmployee, EmpLastname: value});
    }

    const changePhoneHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setEditEmployee({...editEmployee, EmpPhone: value});
    }

    const onEdit = () => {
        const employee:Iworker = {
            EmpFirstname:editEmployee.EmpFirstname,
            EmpLastname:editEmployee.EmpLastname,
            EmpPhone:editEmployee.EmpPhone,
            Id:props.Id
        };
        props.onEdit(employee);
    }

    return (
        <div>
        <label>Imię:</label>
        <input 
           className = "form-control"
           type="text" 
            value={editEmployee.EmpFirstname} 
            onChange={changeFirstNameHandler} />
        
        <label>Nazwisko:</label>
        <input 
        className = "form-control"
        type="text" 
         value={editEmployee.EmpLastname} 
         onChange={changeLastNameHandler} />
    
        <label>Telefon:</label>
        <input 
           className = "form-control"
           type="text" 
            value={editEmployee.EmpPhone} 
            onChange={changePhoneHandler} />

        <button onClick={() => onEdit()}>Zapisz</button>
    </div>)
    
}