import { Row, Col } from "react-bootstrap";
import styles from "./Employee.module.css"
import {Iworker} from "../../../../Models/Model"

function Employee(props:{employee:Iworker}) {
    return (
        <div className={`${styles.emp}`}>
            <div>{props.employee.EmpFirstname} {props.employee.EmpLastname}</div>
            <div className="col">{props.employee.EmpPhone}</div>
            <button>edycja</button>
            <button>rozwin</button>
        </div>)
}

export default  Employee;