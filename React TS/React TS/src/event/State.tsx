import { useState } from 'react'

const State = () => {
    const [state, setState] = useState(
        {
            name:"Davidson",
            age:27,
            salary: 2400000,
            
        }
    )
    const updateName = () => {
        setState({name:"Allen",age:state.age, salary:state.salary})
    }
    const updateAge = () => {
        setState({name:state.name,age:20, salary:state.salary})
    }
    const updateSalary = () => {
        setState({name:state.name,age:state.age, salary:4800000})
    }
  return (
    <>
        <h2>State</h2>
        <h4>Name - {state.name}</h4>
        <h4>Age - {state.age}</h4>
        <h4>Salary - {state.salary}</h4>
        <br /><br />
        <button onClick={updateName}>Update Name</button>
        <button onClick={updateAge}>Update Age</button>
        <button onClick={updateSalary}>Update Salary</button>
    </>
  )
}

export default State