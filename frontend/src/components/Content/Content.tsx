import Employees from "./Employees/Employees";
import Departments from "./Departments/Departments";
import { ListFormat } from "typescript";
import {Iworker, Idepart} from "../../Models/Model"

export default function Content(props:{
    setEmployees: React.Dispatch<React.SetStateAction<Iworker[]>>;
    employees:Iworker[];
    setDepartments: React.Dispatch<React.SetStateAction<Idepart[]>>;
    departments:Idepart[];
    contentChange:string 
}) {

    switch(props.contentChange) {
        case "emp":
            return (
            <>
                <Employees
                    employees={props.employees}
                    setEmployees={props.setEmployees}
                ></Employees>
            </>)
        case "dep":
            return(<Departments
                    departments={props.departments}
                    setDepartments={props.setDepartments}
                ></Departments>)
        default:
            return (<div>Cotent change Error</div>)
    }
}