import { useEffect, useState } from "react"
import { Iworker, INdepWork, IN3depWork } from "../../../../../../Models/Model"
import styles from "../../../../Employees/Employee/Employee.module.css"

export default function AddEmployee(props:{
    DepId:number
    newEmpList:Iworker[]
    onAdd(depWorker:INdepWork):any
})
{
    const firstEmp = props.newEmpList[0].EmpFirstname+' '+props.newEmpList[0].EmpLastname
    const [showForm, setShowForm] = useState(false)
    const [newDepWork, setNewDepWork] = useState<IN3depWork>({
        DepId:props.DepId,
        EmpPhone:'',
        EmpName:firstEmp
    })

    const changeDepHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value
        setNewDepWork({...newDepWork,EmpPhone: value});   
    }

    const addDW = () => {
        const id = props.newEmpList.filter(e=>e.EmpPhone===newDepWork.EmpPhone)
        const DW:INdepWork = {
            EmpId:id[0].Id,
            DepId:newDepWork.DepId
        }
        props.onAdd(DW)
        setNewDepWork({
            DepId:props.DepId,
            EmpPhone:'',
            EmpName:firstEmp
        })
        setShowForm(false)
    }
    useEffect(()=>{
        setNewDepWork({
            DepId:props.DepId,
            EmpPhone:props.newEmpList[0].EmpPhone,
            EmpName:firstEmp
        })
     },[props.newEmpList]);
    return(showForm ?(
        <div className={`${styles.add}`}>
            <label>Pracownik</label>
            <select 
                className = "form-control"
                // type="submit"
                value={newDepWork.EmpPhone}
                onChange={changeDepHandler} 
                >
                {props.newEmpList.map((emp) =>
                    <option key={emp.Id} value={emp.EmpPhone}>{emp.EmpFirstname} {emp.EmpLastname}</option>
                    )}
        </select> 
        <button onClick={()=>{addDW()}}>Zapisz</button>
        <button onClick={()=>setShowForm(false)}>Anuluj</button>
        </div>)
        :(<div className={`${styles.add}`}>
            <button onClick={()=>setShowForm(true)}>dodaj pracownika</button>
        </div>)
    )
}