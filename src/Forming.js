import {  useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const valid = yup.object({
  email : yup
   .string()
   .min(15, "need more")
   .required(),

  password : yup
    .string()
    .min(8, "need password strang")
    .required()
})

export const Forming = () => {
   
  const formic = useFormik({
        initialValues: {email: "", password:""},
        validationSchema: valid,
        onSubmit: (values)=>{
          console.log("list", values)  
        }
    })
  return (
    <div className='form'>
        <form className='inner-form' onSubmit={formic.handleSubmit}>
            <input
            className='form-input'
            id='email'
            name='email'
            type='email'
               placeholder='email'
               onChange={formic.handleChange}
               value={formic.values.email}
               onBlur={formic.handleBlur}
            />{ formic.touched.email && formic.errors.email ? formic.errors.email : " "}
            <br></br>
            <br></br>
            <input
             className='form-input'
            id='password'
            name='password'
            type='password'
            onBlur={formic.handleBlur}
            onChange={formic.handleChange}
            placeholder='password'
            value={formic.values.password}
            /><br></br>{formic.touched.password && formic.errors.password ? formic.errors.password : ""}
            <br></br><br></br>
            <button  className='form-input' type='submit'>Submit</button>
        </form>
    </div>
  )
}
