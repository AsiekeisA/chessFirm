import Employees from "./Employees/Employees";
import Departments from "./Departments/Departments";
import { ListFormat } from "typescript";

export default function Content(props:{contentChange:string, employees:any}) {
    switch(props.contentChange) {
        case "emp":
            return (
            <>
                <Employees
                    employees={props.employees}
                ></Employees>
            </>)
        case "dep":
            return(<Departments
                    
                ></Departments>)
        default:
            return (<div>Cotent change Error</div>)
    }
}