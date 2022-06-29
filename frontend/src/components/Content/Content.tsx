import Employees from "./Employees/Employees";
import Departments from "./Departments/Departments";
import {Iworker, Idepart,IdepWork, INdepWork} from "../../Models/Model"
import axios from '../../axios'

export default function Content(props:{
    setEmployees: React.Dispatch<React.SetStateAction<Iworker[]>>;
    setDepartments: React.Dispatch<React.SetStateAction<Idepart[]>>;
    setDepWorkers: React.Dispatch<React.SetStateAction<IdepWork[]>>;
    employees:Iworker[];
    departments:Idepart[];
    depWorkers:IdepWork[];
    contentChange:string 
})
{

    const addDepWorker = async(depWorker:INdepWork) => {
        await axios.post('/DepWorker', depWorker);
        const resEmployees = await axios.get('/DepWorker');
        const depWor:IdepWork[] = resEmployees.data;
        props.setDepWorkers(depWor);
    }

    const deleteDepWorker = async (Id:number) => {
        console.log('usuwanie', Id);
        const depWor = [...props.depWorkers].filter(dw => dw.Id !== Id);
        await axios.delete('/DepWorker/'+ Id);
        props.setDepWorkers(depWor);
    }

    switch(props.contentChange) {
        case "emp":
            return (
            <>
                <Employees
                    employees={props.employees}
                    depWorkers={props.depWorkers}
                    dwOnDelete={(Id:number) => deleteDepWorker(Id)}
                    setEmployees={props.setEmployees}
                    addDepWorker={addDepWorker}
                    departments={props.departments}
                ></Employees>
            </>)
        case "dep":
            return(<Departments
                    departments={props.departments}
                    depWorkers={props.depWorkers}
                    dwOnDelete={(Id:number) => deleteDepWorker(Id)}
                    setDepartments={props.setDepartments}
                    addDepWorker={addDepWorker}
                    employees={props.employees}
                ></Departments>)
        default:
            return (<div>Cotent change Error</div>)
    }
}