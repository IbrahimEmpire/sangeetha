import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {  useFormik } from 'formik'
import * as yup from 'yup'

const validSchema = yup.object({
  name: yup.string().min(5, "need more").required("Fill the Name"),
  poster: yup.string().min(5, "need more").required("Fill the poster"),
  rating: yup.string().min(1, "need more").required("Fill the rating"),
  summary: yup.string().min(5, "need more").required("Fill the summary"),
})




export const Addmovie = ({data, setData}) => {



  const formic = useFormik({
    initialValues:{
      name:"", poster:"",rating:"",summary:""
    },
    validationSchema:validSchema,
   
    onSubmit:(newMovie)=>{
      createMovie(newMovie)
    }
  })
    const navigate = useNavigate()
//     const [name, setName]= useState()
// const [poster, setPoster]= useState()
// const [rating, setRating] = useState()
// const [summary, setSummary]= useState()

const createMovie = (newMovie)=>{
  fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user`,{method: "post",
     body: JSON.stringify(newMovie),
     headers:{"Content-Type": "application/json"}
  }).then((data)=> data.json())
  navigate("/movie")
      //  setData([...data, newBook])
      //  navigate("/movie")
}
  return (
    <form className='add-movie'  onSubmit={formic.handleSubmit}>
    <TextField variant="outlined" label="Name"  type='text' placeholder='name' 
   id='name' name='name'
   onChange={formic.handleChange}
   value={formic.values.name}
   onBlur={formic.handleBlur}
    />{formic.touched.name && formic.errors.name ? formic.errors.name: ""}
    <br></br>
      <TextField variant="outlined" label="Poster" type='text' placeholder='poster' 
  
    id='Poster' name='Poster'
    onChange={formic.handleChange}
    onBlur={formic.handleBlur}
    value={formic.values.Poster}
    />{formic.touched.Poster && formic.errors.Poster ? formic.errors.Poster: ""}<br></br>
      <TextField variant="outlined" label="Rating" type='text' placeholder='rating' 
  
    id='Rating' name='Rating'
    onChange={formic.handleChange}
    onBlur={formic.handleBlur}
    value={formic.values.Rating}
    />{formic.touched.Rating && formic.errors.Rating ? formic.errors.Rating: ""}<br></br>
      <TextField variant="outlined" label="Summary" type='text' placeholder='summary' 
   
    id='Summary' name='Summary'
    onChange={formic.handleChange}
    onBlur={formic.handleBlur}
    value={formic.values.Summary}
    />{formic.touched.Summary && formic.errors.Summary ? formic.errors.Summary: ""}<br></br>
    <Button variant="contained" 
    type='submit'
    className='add-btn'
    onClick={createMovie}
  //     const newBook ={
  //       name:name,
  //       rating:rating,
  //       poster:poster,
  //       summary: summary
  //     }
  //    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user`,{method: "post",
  //    body: JSON.stringify(newBook),
  //    headers:{"Content-Type": "application/json"}
  // }).then((data)=> data.json())
  // navigate("/movie")
  //     //  setData([...data, newBook])
  //     //  navigate("/movie")
    >Addbook</Button>
  </form>
  )
}
