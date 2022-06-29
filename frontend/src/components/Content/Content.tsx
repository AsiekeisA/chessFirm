import Employees from "./Employees/Employees";
import Departments from "./Departments/Departments";
import { ListFormat } from "typescript";
import {Iworker, Idepart,IdepWork} from "../../Models/Model"
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
                    setDepWorkers={props.setDepWorkers}
                    dwOnDelete={(Id:number) => deleteDepWorker(Id)}
                    setEmployees={props.setEmployees}
                    departments={props.departments}
                ></Employees>
            </>)
        case "dep":
            return(<Departments
                    departments={props.departments}
                    depWorkers={props.depWorkers}
                    dwOnDelete={(Id:number) => deleteDepWorker(Id)}
                    setDepartments={props.setDepartments}
                    employees={props.employees}
                ></Departments>)
        default:
            return (<div>Cotent change Error</div>)
    }
}