import React, { useState } from 'react'

const Event = () => {
    const greet = () => {
        console.log(`Hello How are You Davidson`);
        
    }
    
    // let c =0
    // const Counting=() =>{
    //     console.log(`Count is: ${c}`)
    //     c++
    // }
    const [count, setCount] = useState(0)
  return (
    <div className="p-10">
        <h1>Events</h1>
        <button onClick={() => console.log(`You clicked me Pervert 😠`)} className='border rounded-md bg-gray-300 my-2'>Direct function</button><br></br> {/* This will work */}
        <button onClick={greet}  className='border rounded-md bg-gray-300'>Greet</button><br></br>
        
        <button onClick={()=>setCount(count+1)}  className='border rounded-md bg-gray-300'>Increment</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)} className='border rounded-md bg-gray-300'>Decrement</button>
        <br /><br /><br /><br />
        <button onClick={()=>setCount(0)} className='border rounded-md bg-gray-300'>Reset</button>
    </div>
  )
}

export default Event