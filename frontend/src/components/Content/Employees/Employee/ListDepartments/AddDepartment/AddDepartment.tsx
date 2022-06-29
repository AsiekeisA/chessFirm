import { useEffect, useState } from "react"
import { Idepart, INdepWork, IN2depWork } from "../../../../../../Models/Model"
import styles from "../../Employee.module.css"

export default function AddDepartment(props:{
    EmpId:number
    newDepList:Idepart[]
    onAdd(depWorker:INdepWork):any
})
{
    var firstDep = props.newDepList[0].DepName
    const [showForm, setShowForm] = useState(false)
    const [newDepWork, setNewDepWork] = useState<IN2depWork>({
        DepName:firstDep,
        EmpId:props.EmpId
    })
    const [nameDep, setName] =useState(props.newDepList[0].DepName)

    const changeDepHandler = (event: { target: { value: string; }; }) => {
        const value = event.target.value
        setNewDepWork({...newDepWork,DepName: value});   
    }

    const addDW = () => {
        // if (newDepWork.DepId===firstDep){
        //     firstDep=props.newDepList[1].Id
        // }
        const id = props.newDepList.filter(e=>e.DepName===newDepWork.DepName)
        const DW:INdepWork = {
            DepId:id[0].Id,
            EmpId:newDepWork.EmpId
        }
        props.onAdd(DW)
        console.log(DW)
        setNewDepWork({
            DepName:'',
            EmpId:props.EmpId
        })
        setShowForm(false)
    }
    useEffect(()=>{
        setNewDepWork({
            DepName:props.newDepList[0].DepName,
            EmpId:props.EmpId
        })
     },[props.newDepList]);
    return(showForm ?(
        <div className={`${styles.add}`}>
            <label>Dział</label>
            <select 
                className = "form-control"
                // type="submit"
                value={newDepWork.DepName}
                onChange={changeDepHandler} 
                >
                {props.newDepList.map((dep) =>
                    <option key={dep.Id} value={dep.DepName}>{dep.DepName}</option>
                    )}
        </select> 
        <button onClick={()=>{addDW()}}>Zapisz</button>
        <button onClick={()=>setShowForm(false)}>Anuluj</button>
        </div>)
        :(<div className={`${styles.add}`}>
            <button onClick={()=>setShowForm(true)}>dodaj dział</button>
        </div>)
    )
}