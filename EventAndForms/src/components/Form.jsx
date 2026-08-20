import React, { useState } from 'react'

function Form() {

    const [name, setName]= useState("");

    function handleChange(e){
        setName(e.target.value);
    }
  return (
    <>
    <form action="">
        <input type="text" onChange={handleChange} value={name} />
    </form>
    <h1>{name}</h1>
    </>
  )
}

export default Form