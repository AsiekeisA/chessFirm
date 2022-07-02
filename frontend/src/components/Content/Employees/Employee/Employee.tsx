import styles from "./Employee.module.css"
import {Iworker, IdepWork,Idepart, INdepWork} from "../../../../Models/Model"
import ListDepartments from "./ListDepartments/ListDepartments";
import { useState } from "react";
import AddDepartment from "./ListDepartments/AddDepartment/AddDepartment";

function Employee(props:{
    onEdit(employee: { Id: number; EmpFirstname: string; EmpLastname: string; EmpPhone: string; }):any;
    onDelete(Id:number):any;
    employee:Iworker
    departments:Idepart[];
    depWorkers:IdepWork[];
    addDepWorker(depWorker:INdepWork):any
    dwOnDelete(Id:number):any
}) {

    let newDepList = props.departments
    const [showList, setShowList] = useState(false);
    const [btnName, setBtnName] = useState("rozwiń")
    const selectDepWorker = props.depWorkers.filter(dw => dw.EmpId === props.employee.Id)
    if (selectDepWorker.length>0){
        for(var i=0; i<selectDepWorker.length; i++){
            newDepList = newDepList.filter(dw=>dw.Id!==selectDepWorker[i].DepId)
        }
    }

    const setList = () => {
        showList?
        setBtnName("rozwiń"):setBtnName("zwiń")
        setShowList(!showList)
    }

    const deleteEmp = (id:number) => {
        if (selectDepWorker.length>0){
            for (var i=0; i<selectDepWorker.length; i++){
                props.dwOnDelete(selectDepWorker[i].Id)
            }
        }
        props.onDelete(id)
    }

    const editHandler = () => {
        props.onEdit({
            Id:props.employee.Id,
            EmpFirstname:props.employee.EmpFirstname,
            EmpLastname:props.employee.EmpLastname,
            EmpPhone:props.employee.EmpPhone
        })
    }

    return (
        <>
        <div className={`${styles.emp} flexbox-cointainer`}>
            <div className="col">{props.employee.EmpFirstname} {props.employee.EmpLastname}</div>
            <div className="col">{props.employee.EmpPhone}</div>
            <div className="col"><button onClick={()=>{setList()}}>{btnName}</button></div>
            <div className="col"><button onClick={editHandler}>edycja</button></div>
            <div className="col"><button onClick={() => {deleteEmp(props.employee.Id)}}>usuń</button></div>
        </div>
         {selectDepWorker.map((depWork: IdepWork) => (
            <ListDepartments
                key={depWork.Id}
                depWork = {depWork}
                showList={showList}
                departments={props.departments}
                onDelete={(Id:number) => props.dwOnDelete(Id)}
                setShowList={setShowList}       
            />
            ))}
            {newDepList.length>0 && showList?(
            <AddDepartment
                EmpId={props.employee.Id}
                newDepList={newDepList}
                onAdd={props.addDepWorker}
            />):(<></>)
            }
        </>)
}

export default  Employee;