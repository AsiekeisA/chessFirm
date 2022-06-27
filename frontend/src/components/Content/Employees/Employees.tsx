import { Container } from "react-bootstrap";
import Employee from "./Employee/Employee";
import styles from './Employees.module.css';

function Employees(props: {employees:any}) {
    return (<Container className={`${styles.emps}`}>
            <button>add new</button>
            {/* {props.employees.map((employee: any) => (
                <Employee
                    key={employee.Id}
                    {...employee}         
                    />
            ))} */}
        </Container>
    );
}

export default  Employees;