import React from 'react'

const BasicInputbox = (props) => {
  return (
    <>
        <div className="title">
            <label>{props.title}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    </>
  )
}

export default BasicInputbox