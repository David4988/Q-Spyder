import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
        email:"@gmail.com",
        password:"", 
        gender:"", 
        addr: "",
        state: "",
    })
    // let [email, password] = data

    let handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setData({...data, [key]:value})
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email : "+data.email);
        console.log("Password : "+data.password);
        console.log(" Gender : "+ data.gender)
        console.log("Address : "+data.addr);
        console.log("State : "+data.state);
        
    }
    let handleReset = () => {
        // let key = e.target.key
        // let value = e.target.value
        setData({email: "",password:"",gender:"", addr:"", state:"" })
    }
  return (
    <div><form onSubmit={handleSubmit}>
            <label>Email : </label>
            <input type="text"  onChange={handleChange} name="email" id="email" value={data.email}/><br /><br />
            <label>Password : </label>
            <input type="password" name='password' value={data.password} onChange={handleChange}/><br /><br />
            <label htmlFor="">Gender</label>
            <input type="radio" name="gender" id="male" value="Male" onClick={handleChange}/>Male
            <input type="radio" name="gender" id="female" value="Female"/>Female<br /><br />
            <label>Address : </label>
            <textarea name="addr" id="" value={data.addr} onChange={handleChange}></textarea>
            <br /><br />
            <select name="state" id="" onChange={handleChange}>
                <option name="state"value="">---</option>
                <option name="state"value="Tamilnadu">Tamil Nadu</option>
                <option name="state"value="Andhra">Andhra Pradesh</option>
                <option name="state"value="Karnataka">Karnataka</option>
            </select>

            <button>Submit</button>
            <button type="reset" onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}

export default Login