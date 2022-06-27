import { Row, Col } from "react-bootstrap";
import styles from "./Employee.module.css"

function Employee(props:{employee:any}) {
    return (
        <div className={`${styles.emp}`}>
            <div>{props.employee.EmpFirstname} {props.employee.EmpLastname}</div>
            <div className="col">{props.employee.EmpPhone}</div>
            <button>edycja</button>
            <button>rozwin</button>
        </div>)
}

export default  Employee;