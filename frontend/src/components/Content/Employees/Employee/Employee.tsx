import { Row, Col } from "react-bootstrap";
import styles from "./Employee.module.css"
import {Iworker, IdepartList, IdepWork,Idepart} from "../../../../Models/Model"
import axios from '../../../../axios'
import ListDepartments from "./ListDepartments/ListDepartments";
import { useEffect, useState } from "react";

function Employee(props:{
    onEdit(employee: { Id: number; EmpFirstname: string; EmpLastname: string; EmpPhone: string; }):any;
    onDelete(Id:number):any;
    employee:Iworker
    departments:Idepart[];
    depWorkers:IdepWork[];
    dwOnDelete(Id:number):any
}) {

    const [showList, setShowList] = useState(false);
    // const [departmentsList, setDepartmentList] = useState<IdepartList[]>([])
    // const listing = async() =>{
    //     const resEmployees = await axios.get('/Employee/'+props.employee.Id);
    //     const employ:IdepartList[] = resEmployees.data;
    //     setDepartmentList(employ)
    // }

    const selectDepWorker = props.depWorkers.filter(dw => dw.EmpId === props.employee.Id)

    // useEffect(()=>{
    //     listing();
    //  },[]);

    const editHandler = () => {
        props.onEdit({
            Id:props.employee.Id,
            EmpFirstname:props.employee.EmpFirstname,
            EmpLastname:props.employee.EmpLastname,
            EmpPhone:props.employee.EmpPhone
        })
    }

    return (
        <><div className={`${styles.emp}`}>
            <div>{props.employee.EmpFirstname} {props.employee.EmpLastname}</div>
            <div className="col">{props.employee.EmpPhone}</div>
            <button onClick={editHandler}>edycja</button>
            <button onClick={() => {props.onDelete(props.employee.Id)}}>usuń</button>
            <button onClick={()=>{setShowList(!showList)}}>rozwin</button>
        </div>
         {selectDepWorker.map((depWork: IdepWork) => (
            <ListDepartments
                key={depWork.Id}
                depWork = {depWork}
                showList={showList}
                departments={props.departments}
                onDelete={(Id:number) => props.dwOnDelete(Id)}
                setShowList={setShowList}
                // onDelete={(Id:number) => deleteEmployee(Id)}       
            />
            ))}
            {showList?(
                <div className={`${styles.emp}`}>
                    <button>dodaj dział</button>
                </div>):(<></>)
            }
        </>)
}

export default  Employee;