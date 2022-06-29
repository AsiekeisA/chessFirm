import { Container } from "react-bootstrap";
import Modal from 'react-modal';
import Employee from "./Employee/Employee";
import styles from './Employees.module.css';
import {Iworker, IdepWork, Idepart} from "../../../Models/Model"
import { useEffect, useState } from "react";
import EditEmployee from "./EditEmployee/EditEmployee";
import axios from "../../../axios";
import NewEmployee from "./NewEmployee/NewEmployee";

function Employees(props: {
    employees:Iworker[];
    depWorkers:IdepWork[];
    departments:Idepart[];
    dwOnDelete(Id:number):any
    setDepWorkers: React.Dispatch<React.SetStateAction<IdepWork[]>>;
    setEmployees: React.Dispatch<React.SetStateAction<Iworker[]>>}) {
    const [editEmployeeTemp, setEditEmployee] = useState<Iworker>({
        Id: 0,
        EmpFirstname: '',
        EmpLastname: '',
        EmpPhone: ''
        });
    const [showEditModal, setEditModal] = useState(false);
    const [showNewModal, setNewModal] = useState(false);

    useEffect(() =>{
        Modal.setAppElement('body');
    },[])

    const deleteEmployee = async (Id:number) => {
        console.log('usuwanie', Id);
        const employ = [...props.employees].filter(employees => employees.Id !== Id);
        await axios.delete('/Employee/'+ Id);
        props.setEmployees(employ);
    }

    const deleteDepWorker = async (Id:number) => {
        console.log('usuwanie', Id);
        const depWor = [...props.depWorkers].filter(dw => dw.Id !== Id);
        await axios.delete('/DepWorker/'+ Id);
        props.setDepWorkers(depWor);
    }

    const addEmployee = async(employee:Iworker) => {
        await axios.post('/Employee', employee);
        const resEmployees = await axios.get('/Employee');
        const employ:Iworker[] = resEmployees.data;
        props.setEmployees(employ)
        toggleNewModal();
    }

    const editEmployee = async(employee:Iworker) => {
        await axios.put('/Employee/'+employee.Id, employee);
        const employees = [...props.employees];
        const index = employees.findIndex(x => x.Id === employee.Id);
        if(index >=0) {
            employees[index] = employee;
            props.setEmployees(employees);
        }
        toggleEditModal();
    }

    const toggleEditModal = ()=> {  
        setEditModal(!showEditModal);
    }
    const toggleNewModal = ()=> {  
        setNewModal(!showNewModal);
    }

    const editEmpHandler = (employee:Iworker): void => {
        toggleEditModal();
        setEditEmployee(employee);
    }

    return (<Container className={`${styles.emps}`}>
            <Modal isOpen={showEditModal} contentLabel="Edycja">
                <EditEmployee
                    EmpFirstname={editEmployeeTemp.EmpFirstname}
                    EmpLastname={editEmployeeTemp.EmpLastname}
                    EmpPhone={editEmployeeTemp.EmpPhone}
                    Id={editEmployeeTemp.Id}
                    onEdit={(employee:Iworker) => editEmployee(employee)}
                        ></EditEmployee>
                <button onClick={() => toggleEditModal()}>Anuluj</button>
            </Modal>
            <Modal isOpen={showNewModal} contentLabel="Edycja">
                <NewEmployee 
                 onAdd={(employee) => addEmployee(employee)}
                 />
                <button onClick={() => toggleNewModal()}>Anuluj</button>
            </Modal>
            <button onClick={() => toggleNewModal()}>add new</button>
            {props.employees.map((employee: Iworker) => (
                <Employee
                    key={employee.Id}
                    employee={employee}
                    departments={props.departments}
                    depWorkers={props.depWorkers}
                    // dwOnDelete={(Id:number) => {deleteDepWorker(Id)}}
                    dwOnDelete={(Id:number) => props.dwOnDelete(Id)}
                    onEdit={(employee) => editEmpHandler(employee)}
                    onDelete={(Id:number) => deleteEmployee(Id)}       
                    />
            ))}
        </Container>
    );
}

export default  Employees;