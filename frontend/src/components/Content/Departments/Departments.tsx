import { Container } from "react-bootstrap";
import Modal from 'react-modal';
import styles from '../Employees/Employees.module.css';
import {Idepart, IdepWork, INdepWork, Iworker} from "../../../Models/Model"
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Department from "./Department/Department";
import EditDepartment from "./EditDepartment/EditDepartment";
import NewDepartment from "./NewDepartment/NewDepartment";

function Departments(props: {
    employees:Iworker[];
    departments:Idepart[];
    depWorkers:IdepWork[];
    dwOnDelete(Id:number):any
    addDepWorker(depWorker:INdepWork):any
    setDepartments: React.Dispatch<React.SetStateAction<Idepart[]>>}) {
    const [editDepartmentTemp, setEditDepartment] = useState<Idepart>({
            Id: 0,
            DepName: ''
        });
    const [showEditModal, setEditModal] = useState(false);
    const [showNewModal, setNewModal] = useState(false);

    useEffect(() =>{
        Modal.setAppElement('body');
    },[])

    const deleteDepartment = async (Id:number) => {
        console.log('usuwanie', Id);
        const depart = [...props.departments].filter(departments => departments.Id !== Id);
        await axios.delete('/Department/'+ Id);
        props.setDepartments(depart);
    }

    const addDepartment = async(department:Idepart) => {
        await axios.post('/Department', department);
        const resDepartments = await axios.get('/Department');
        const depart:Idepart[] = resDepartments.data;
        props.setDepartments(depart)
        toggleNewModal();
    }

    const editDepartment = async(department:Idepart) => {
        await axios.put('/Department/'+department.Id, department);
        const departments = [...props.departments];
        const index = departments.findIndex(x => x.Id === department.Id);
        if(index >=0) {
            departments[index] = department;
            props.setDepartments(departments);
        }
        toggleEditModal();
    }

    const toggleEditModal = ()=> {  
        setEditModal(!showEditModal);
    }
    const toggleNewModal = ()=> {  
        setNewModal(!showNewModal);
    }

    const editDepHandler = (department:Idepart): void => {
        toggleEditModal();
        setEditDepartment(department);
    }

    return (<Container className={`${styles.emps}`}>
            <Modal isOpen={showEditModal} contentLabel="Edycja">
                <EditDepartment
                    DepName={editDepartmentTemp.DepName}
                    Id={editDepartmentTemp.Id}
                    onEdit={(department:Idepart) => editDepartment(department)}
                        ></EditDepartment>
                <button onClick={() => toggleEditModal()}>Anuluj</button>
            </Modal>
            <Modal isOpen={showNewModal} contentLabel="Edycja">
                <NewDepartment 
                 onAdd={(department) => addDepartment(department)}
                 />
                <button onClick={() => toggleNewModal()}>Anuluj</button>
            </Modal>
            <button onClick={() => toggleNewModal()}>Nowy dział</button>
            {props.departments.map((department: Idepart) => (
                <Department
                    key={department.Id}
                    department={department}
                    depWorkers={props.depWorkers}
                    employees={props.employees}
                    addDepWorker={props.addDepWorker}
                    dwOnDelete={(Id:number) => props.dwOnDelete(Id)}
                    onEdit={(department:Idepart) => editDepHandler(department)}
                    onDelete={(Id:number) => deleteDepartment(Id)}       
                    />
            ))}
        </Container>
    );
}

export default  Departments;