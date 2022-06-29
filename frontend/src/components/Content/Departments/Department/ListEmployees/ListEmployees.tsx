import { Iworker, IdepWork } from "../../../../../Models/Model"
import styles from "../../../Employees/Employee/Employee.module.css"

function ListEmployees(
    props:{
        depWork:IdepWork;
        employees:Iworker[];
        showList:boolean;
        onDelete(Id:number):any;
        setShowList:React.Dispatch<React.SetStateAction<boolean>>
    })
{

    const employ = props.employees.filter(e=>e.Id===props.depWork.EmpId)

    return (
        props.showList ? (
            <div className={`${styles.emp}`}>
                <li>{employ[0].EmpFirstname} {employ[0].EmpLastname}</li>
                <button onClick={() => {props.onDelete(props.depWork.Id)}}>usuń</button>
            </div>):(<></>))
}

export default ListEmployees;