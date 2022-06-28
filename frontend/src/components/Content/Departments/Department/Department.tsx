import { Row, Col } from "react-bootstrap";
import styles from "../../Employees/Employee/Employee.module.css"
import {Idepart} from "../../../../Models/Model"

function Department(props:{
    onEdit(department: { Id: number; DepName:string }):any;
    onDelete(Id:number):any;
    department:Idepart
}) {

    const editHandler = () => {
        props.onEdit({
            Id:props.department.Id,
            DepName:props.department.DepName,
        })
    }

    return (
        <div className={`${styles.emp}`}>
            <div>{props.department.DepName}</div>
            <button>rozwin</button>
            <button onClick={editHandler}>edycja</button>
            <button onClick={() => {props.onDelete(props.department.Id)}}>usuń</button>
        </div>)
}

export default  Department;