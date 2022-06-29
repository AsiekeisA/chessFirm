import { IdepWork, Idepart } from "../../../../../Models/Model"
import styles from "../../../Employees/Employee/Employee.module.css"

function ListDepartments(
    props:{
        depWork:IdepWork;
        departments:Idepart[];
        showList:boolean;
        onDelete(Id:number):any;
        setShowList:React.Dispatch<React.SetStateAction<boolean>>
    })
{

    const depart = props.departments.filter(d=>d.Id===props.depWork.DepId)


    return (
        props.showList ? (
            <div className={`${styles.emp}`}>
                <li>{depart[0].DepName} </li>
                <button onClick={() => {props.onDelete(props.depWork.Id)}}>usuń</button>
            </div>):(<></>))
}

export default ListDepartments;