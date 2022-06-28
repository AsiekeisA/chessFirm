import { Row, Col } from "react-bootstrap";
import styles from "./Employee.module.css"
import {Iworker} from "../../../../Models/Model"

function Employee(props:{
    onEdit(employee: { Id: number; EmpFirstname: string; EmpLastname: string; EmpPhone: string; }):any;
    onDelete(Id:number):any;
    employee:Iworker
}) {

    const editHandler = () => {
        props.onEdit({
            Id:props.employee.Id,
            EmpFirstname:props.employee.EmpFirstname,
            EmpLastname:props.employee.EmpLastname,
            EmpPhone:props.employee.EmpPhone
        })
    }

    return (
        <div className={`${styles.emp}`}>
            <div>{props.employee.EmpFirstname} {props.employee.EmpLastname}</div>
            <div className="col">{props.employee.EmpPhone}</div>
            <button onClick={editHandler}>edycja</button>
            <button onClick={() => {props.onDelete(props.employee.Id)}}>usuń</button>
            <button>rozwin</button>
        </div>)
}

export default  Employee;