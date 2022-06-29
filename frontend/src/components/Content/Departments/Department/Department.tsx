import { Row, Col } from "react-bootstrap";
import styles from "../../Employees/Employee/Employee.module.css"
import {Idepart, Iworker, IdepWork} from "../../../../Models/Model"
import axios from '../../../../axios'
import { useState, useEffect } from "react";
import ListEmployees from "./ListEmployees/ListEmployees";

function Department(props:{
    onEdit(department: { Id: number; DepName:string }):any;
    onDelete(Id:number):any;
    department:Idepart;
    depWorkers:IdepWork[];
    employees:Iworker[];
    dwOnDelete(Id:number):any
}) {

    const [showList, setShowList] = useState(false);
    // const [employeesList, setEmployeesList] = useState<IworkerList[]>([])
    // const listing = async() =>{
    //     const resEmployees = await axios.get('/Department/'+props.department.Id);
    //     const employ:IworkerList[] = resEmployees.data;
    //     setEmployeesList(employ)
    // }
    
    const selectDepWorker = props.depWorkers.filter(dw => dw.DepId === props.department.Id)

    // useEffect(()=>{
    //     listing();
    //  },[]);

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
            <button onClick={()=>{setShowList(!showList)}}>rozwin</button>
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
            {showList?(
                <div className={`${styles.emp}`}>
                    <button>dodaj pracownika</button>
                </div>):(<></>)
            }
        </>)
}

export default  Department;