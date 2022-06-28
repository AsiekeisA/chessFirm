import { useState } from 'react';
import { Idepart } from '../../../../Models/Model';

function NewDepartment(
    props:{
    onAdd(department: Idepart):any;
}) {

    const [newDepartment, setNewDepartment] = useState<Idepart>({
        DepName:'',
        Id:0
    })

     const changeNameHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value.toUpperCase();
        setNewDepartment({...newDepartment, DepName: value});
    }

    const addDepartment = () => {
        const department:Idepart = {
            DepName:newDepartment.DepName,
            Id:newDepartment.Id
        };
        props.onAdd(department)
        setNewDepartment({
            DepName:'',
            Id:0
        })
    }

    return(
            <div>
            <label>Nazwa:</label>
            <input 
               className = "form-control"
               type="text" 
                value={newDepartment.DepName} 
                onChange={changeNameHandler} />
    
            <button onClick={() => addDepartment()}>Zapisz</button>
        </div>
        )
}

export default NewDepartment;