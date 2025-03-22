import React, { useState } from 'react'

const States = () => {
    const People = ["Davidson", "Rizz King", "Genshin Guy"]
    const Age = [20,19,20]
    const Salary = [2400000,6400000, 3600000]
    const Married = true
    let Ppl;
    const [state, setState] = useState(
        {
        name:"Davidson",
        age:27,
        salary: 2400000,
        married: "Yes"
        }
    )
    // const [people, setPeople] = useState(0)
    // const [age, setAge] = useState(0)
    // const [salary, setSalary] = useState(0)
    // const [married, setMarried] = useState(0)
    // const [all, setAll] = useState(0)
    let  updateName = () =>{
         setState({name:"Allen",age:state.age, salary:state.salary, married:state.married})
    }
    let  updateAge = () =>{
        setState({name:state.name,age:20, salary:state.salary, married:state.married})
   }
   let  updateSalary = () =>{
    setState({name:state.name,age:state.age, salary:4800000, married:state.married})
    }
    let  updateMarried = () =>{
        setState({name:state.name,age:state.age, salary:state.salary, married:"No"})
        }
    
  return (
    <>
    <div>States</div>
    {/* <h4>Name - {People[all]}</h4>
    <h4>Age - {Age[all]}</h4>
    <h4>Salary - {Salary[all]}</h4>
    <h4>Happy - {((all)?"Yes":"Married")}</h4> */}
    <h4>Name - {state.name}</h4>
    <h4>Age - {state.age}</h4>
    <h4>Salary - {state.salary}</h4>
    <h4>Happy - {state.married}</h4>
    {/* <button onClick={()=>setPeople((people<2)?people+1:0)}>People</button>
    <button onClick={()=>setAge((age<2)?age+1:0)}>Age</button>
    <button onClick={()=>setSalary((salary<2)?salary+1:0)}>Salary</button>
    <button onClick={()=>setMarried(!married)}>Happy life?</button> */}

    {/* <button onClick={()=>setAll((all<2)?all+1:0)}>People</button>
    <button onClick={()=>setAll((all<2)?all+1:0)}>Age</button>
    <button onClick={()=>setAll((all<2)?all+1:0)}>Salary</button> */}
    {/* <button onClick={()=>setAll(!married)}>Happy life?</button> */}

    <button onClick={updateName}>Update name</button>
    <button onClick={updateAge}>Update age</button>
    <button onClick={updateSalary}>Update salary</button>
    <button onClick={updateMarried}>Update Married</button>
    </>
  )
}

export default States