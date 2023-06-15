
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

export const Editmovie = () => {
  const [movie, setMovie] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams();
  // const movie = data[id];


  useEffect(()=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${id}`,{method: "GET"})
    .then((res)=>res.json())
    .then((data)=>{setMovie(data)})
      },[])
  return movie ?  <Editform movie={movie}/> : "Movie is loading..... pls wait...."
  
}


export function Editform({movie}){
  const navigate = useNavigate()
  const [name, setName]= useState(movie.name)
const [poster, setPoster]= useState(movie.poster)
const [rating, setRating] = useState(movie.rating)
const [summary, setSummary]= useState(movie.summary)
const [video, setVideo]= useState(movie.video)
  return(
    <div className='add-movie'>
    <TextField variant="outlined" label="Name"  type='text' placeholder='name' value={name}
    onChange={(e)=>setName(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Poster" type='text' placeholder='poster' value={poster}
    onChange={(e)=>setPoster(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Rating" type='text' placeholder='rating' value={rating}
    onChange={(e)=>setRating(e.target.value)}
    /><br></br>
      <TextField variant="outlined" label="Summary" type='text' placeholder='summary' value={summary}
    onChange={(e)=>setSummary(e.target.value)}
    /><br></br>
    <Button variant="contained" 
    className='add-btn'
    onClick={()=>{
      const updatedMovie ={
        name:name,
        rating:rating,
        poster:poster,
        summary: summary
      }
     fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${movie.id}`,{method: "PUT",
     body: JSON.stringify(updatedMovie),
     headers:{"Content-Type": "application/json"}
  }).then((data)=> data.json()).then(()=> navigate("/movie"))
 
      //  setData([...data, newBook])
      //  navigate("/movie")
    }}>Save</Button>
  </div>
  )
}