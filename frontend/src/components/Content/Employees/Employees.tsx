import { Container } from "react-bootstrap";
import Employee from "./Employee/Employee";
import styles from './Employees.module.css';
import {Iworker} from "../../../Models/Model"

function Employees(props: {employees:Iworker[]}) {
    return (<Container className={`${styles.emps}`}>
            <button>add new</button>
            {props.employees.map((employee: Iworker) => (
                <Employee
                    key={employee.Id}
                    employee={employee}        
                    />
            ))}
        </Container>
    );
}

export default  Employees;