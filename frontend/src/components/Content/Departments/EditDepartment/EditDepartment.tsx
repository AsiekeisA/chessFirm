import { useState } from 'react';
import {Idepart} from '../../../../Models/Model'

export default function EditDepartment(
    props:{
    onEdit(department: Idepart):any;
    DepName:string;
    Id:number;
}
) {

    const [editDepartment, setEditDepartment] = useState<Idepart>({
            Id: props.Id,
            DepName: props.DepName,
            })

    const changeNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setEditDepartment({...editDepartment, DepName: value});
    }

    const onEdit = () => {
        const department:Idepart = {
            DepName:editDepartment.DepName,
            Id:props.Id
        };
        props.onEdit(department);
    }

    return (
        <div>
        <label>Nazwa:</label>
        <input 
           className = "form-control"
           type="text" 
            value={editDepartment.DepName} 
            onChange={changeNameHandler} />
        
        <button onClick={() => onEdit()}>Zapisz</button>
    </div>)
    
}