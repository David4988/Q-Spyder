import React from 'react'

const ListKeys = () => {
    let list = ["HTML", "CSS", "JS", 'TS', "Tailwind", "React", "SASS"]
  return (
    <div className='flex flex-col justify-center px-10 gap-7'>
        <h1>My Skills</h1>
        <ul>
            {list.map((skill, index)=> {
              return(
          <React.Fragment key={index}>
            <li>{skill}</li>
          </React.Fragment>
              )
            })}
        </ul>
    </div>
  )
}

export default ListKeys