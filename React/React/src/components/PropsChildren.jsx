import React from 'react'

const PropsChildren = (props) => {
    console.log(props.children)
  return (
    <div>{props.children}</div>
  )
}

export default PropsChildren