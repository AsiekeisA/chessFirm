import { Row, Col } from "react-bootstrap";
import styles from "../../Employees/Employee/Employee.module.css"
import {Idepart, Iworker, IdepWork, INdepWork} from "../../../../Models/Model"
import axios from '../../../../axios'
import { useState, useEffect } from "react";
import ListEmployees from "./ListEmployees/ListEmployees";
import AddEmployee from "./ListEmployees/AddEmployee/AddEmployee";

function Department(props:{
    onEdit(department: { Id: number; DepName:string }):any;
    onDelete(Id:number):any;
    department:Idepart;
    depWorkers:IdepWork[];
    employees:Iworker[];
    addDepWorker(depWorker:INdepWork):any
    dwOnDelete(Id:number):any
}) {

    let newEmpList = props.employees
    const [showList, setShowList] = useState(false);
    const [btnName, setBtnName] = useState("rozwiń")
    const selectDepWorker = props.depWorkers.filter(dw => dw.DepId === props.department.Id)
    if (selectDepWorker.length>0){
        for(var i=0; i<selectDepWorker.length; i++){
            newEmpList = newEmpList.filter(dw=>dw.Id!=selectDepWorker[i].EmpId)
        }
    }

    const setList = () => {
        showList?
        setBtnName("rozwiń"):setBtnName("zwiń")
        setShowList(!showList)
    }
    const editHandler = () => {
        props.onEdit({
            Id:props.department.Id,
            DepName:props.department.DepName,
        })
    }

    return (
        <>
        <div className={`${styles.emp}`}>
            <div>{props.department.DepName}</div>
            <button onClick={()=>{setList()}}>{btnName}</button>
            <button onClick={editHandler}>edycja</button>
            <button onClick={() => {props.onDelete(props.department.Id)}}>usuń</button>
        </div>
        {selectDepWorker.map((depWork: IdepWork) => (
            <ListEmployees
                key={depWork.Id}
                depWork={depWork}
                showList={showList}
                employees={props.employees}
                onDelete={(Id:number) => props.dwOnDelete(Id)}
                setShowList={setShowList}
                
                // onDelete={(Id:number) => deleteEmployee(Id)}       
            />
        ))}
        {newEmpList.length>0 && showList?(
            <AddEmployee
                DepId={props.department.Id}
                newEmpList={newEmpList}
                onAdd={props.addDepWorker}
            />):(<></>)
            }
        </>)
}

export default  Department;