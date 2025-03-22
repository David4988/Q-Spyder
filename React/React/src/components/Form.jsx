// import React from 'react'
// import Info from './Info'
// import PropsChildren from './PropsChildren'
// import ConditionalRendering from '../conditional/conditionalRendering'
// const Form = () => {
//   const Person = {
//     Name:`Davidson`,
//     Age:20,
//     Hobbies: null,
//     FavGames: [`Genshin`, `Zenless Zone Zero`, `Honkai Star Rail`, `Honkai Impact 3`,`Sekiro`, `Ghost of Tsushima`],
//     KnownLang:undefined,
//     Addr: [
//                  `17`,
//                  `Vasantham Apts`,
//                  `Chennai`,
//                  `TamilNadu`,
//     ],
//     eat: () => `He is eating`,
//     play:() => `Playing ZZZ`,
//     sleep:()=> `He is sleeping`,
//     }
//   return (
//     <>
//             <form action="" className=' p-10'>
//             <h1 className='text-3xl font-semibold'>Form</h1>
//                 <fieldset className='flex gap-4 py-5'>
//                     <label htmlFor="name" className='text-lg' >Enter you Name</label>
//                     <input type="text" className='border rounded-sm' /><br></br>
//                     <label htmlFor="name" className='text-lg'>Enter you Age</label>
//                     <input type="number" className='border rounded-sm'/>
//                 </fieldset>
//             </form>
//             <Info name = {Person.Name} age={Person.Age} hobbies={Person.Hobbies} favGames={Person.FavGames} knownLang={Person.KnownLang} addr={Person.Addr} eat={Person.eat} play={Person.play} sleep={Person.sleep}/>
            
//             {/* <Info name = {"Davidson"} age={20}/>
//             <Info name = {"Usopp"} age={20}/> */}
//             <div>
//             <h1 className='text-3xl font-semibold px-10'>Props Children</h1>
//             <PropsChildren>{<Info name = {"Usopp"} age={Person.Age} hobbies={Person.Hobbies} favGames={Person.FavGames} knownLang={Person.KnownLang} addr={Person.Addr} eat={Person.eat} play={Person.play} sleep={Person.sleep}/>}</PropsChildren>
//             </div>
//             <ConditionalRendering />
//         </>
//   )
// }

// export default Form

import React, { useState } from 'react'

const Form = () => {

  // const [userName, setUserName] = useState("")
  // const [email, setEmail] = useState("")
  // const handleUserNameChange = (e) =>{
    
  //   // console.dir(`User Name: ${e.target.value}`)
  //   setUserName(e.target.value)
  //   // console.log(`userName: ${userName}`)
  //   // console.log(`userName: ${email}`)
  // }
  // const handleEmailChange = (e) => {
  //   // console.dir(`Email: ${e.target.value}`)
  //   setEmail(e.target.value)
  //   // console.log(`userName: ${userName}`)
  //   // console.log(`userName: ${email}`)
  // }
  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log("Form Submitted");
    
  //   console.log(`userName: ${data.username}`)
  //   console.log(`userName: ${data.email}`)
  // }

  const [data, setData] = useState({
    username: "Jason David",
    email: "abc@gmail.com",
    // gender: ""
  })
  // let [username, email] = data;
  const handleChange = (e) =>{
    let key = e.target.name;
    let value = e.target.value;

    setData({...data, [key]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`UserName: ${data.username}`);
    console.log(`Email: ${data.email}`)
  }

  const handleReset = () =>{
    setData({username:"",email:""})
  }
  return (
    <form onSubmit={handleSubmit}>
        <label>UserName : </label>
        <input type='text' onChange={handleChange} id='username' value={data.username} name="username"/> {/* //? value attrib. compulsary */}
        <label>Email : </label>
        <input type="email" onChange={handleChange} id='email' value={data.email} name="email"/>
        <label htmlFor="">Gender</label>
        {/* <input type="radio" name="male" id="" value="Male"/>Male
        <input type="radio" name="female" id="" value="Female"/>Female */}
        <button>Submit</button>
        <button onClick={handleReset}>Reset</button>
    </form>
  )
}

export default Form