import React, { useState } from 'react'


// search suggus

const Com = () => {
    const [show , setShow] = useState(true)
    const list = ["beevi ","oli","jamaliya","ibrahim","wajid","liyana", "meedu"]
    const [filer, setFilter]= useState(list)
  
    const handle = (event)=>{
        
        const filtered = list.filter((fill)=>(
            fill.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
           
        ))
        setFilter(filtered)
    }
  return (
    <div className='com'>
<h1>Search:  <input type='text' onChange={handle}/></h1>
{filer.map((li)=>(
    <h1>{li}</h1>
))}


    </div>
  )
}

export default Com

