import React from 'react'
import { useState } from 'react'
// fName, lName, Email, Password, Contact, Age, Gender, Address, State, Linked-Url 
const Register = () => {
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email:"@gmail.com",
        password:"", 
        cont: "",
        age: 0,
        gender:"", 
        addr: "",
        state: "",
        l_in: "",
    })
    let handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setData({...data, [key]:value})
    }
    const [theme, setTheme] = useState(false)
    let handleTheme = (e)=> {
        e.preventDefault()
        return setTheme(!theme)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data)
    }

  return (
    <div style={{
        height:"100vh", 
        width:"100wh", 
        background:(theme)?"black":"", color:(theme)?"white":"" }}>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">First Name : </label>
            <input type="text" name="fName" value={data.fName} onChange={handleChange}/>
            <label htmlFor=""> Last Name : </label>
            <input type="text" name="lName" value={data.lName} onChange={handleChange}/>
            <br/><br />
            <label>Email : </label>
            <input type="text"  onChange={handleChange} name="email" id="email" value={data.email}/><br /><br />
            <label>Password : </label>
            <input type="password" name='password' value={data.password} onChange={handleChange}/><br /><br />
            <label>Contact : </label>
            <input type="tel" name='cont' value={data.cont} onChange={handleChange}/><br /><br />
            <label htmlFor="">Age : </label>
            <input type="number" name="age" id="" value={data.age} onChange={handleChange} /><br /><br />
            <label htmlFor="">Gender</label>
            <input type="checkbox" name="gender" id="" value="Male" onChange={handleChange}/>Male
            <input type="checkbox" name="gender" id="" value='Female' onChange={handleChange}/>Female <br /><br />
            <label htmlFor="">Address</label>
            <textarea name="addr" id="" value={data.addr} onChange={handleChange}></textarea><br /><br />
            <label htmlFor="">State</label>
            <select name="state" id="" onChange={handleChange}>
                <option name="state"value="TamilNadu">TamilNadu</option>
                <option name="state"value="Andhra">Andhra Pradesh</option>
                <option name="state"value="Kerala">Kerala</option>
            </select><br /><br />
            <label htmlFor="">Linked-in URL : </label>
            <input type="url" name="l_in" id="" value={data.l_in} onChange={handleChange}/><br /><br />

            <br/><br/>
            <button type="submit">Submit</button>
            <button onClick={handleTheme}>Theme</button>
        </form>
    </div>
    
  )
}

export default Register