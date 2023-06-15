import { Like } from './Like';
import { useState } from 'react';
import { TotalMovie } from './App';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {URL} from './renderapi'

export function MovieList() {
const [data, setData] = useState([])
const navigate = useNavigate()
const getmovie = ()=>{
  fetch(`${URL}/movie`,{method: "GET"})
  .then((res)=>res.json())
  .then((res)=>setData(res))
}

  useEffect(()=>{
    getmovie()
      },[])

  return (
    <div>
   
     
      <div className='movie-list'>
      {data.map((e, i) => (
        <Movie key={i} data={e} id={e.id} dlt ={<IconButton aria-label="delete"
        onClick={()=>{
          fetch(`https://sang-3aro.onrender.com/${e.id}`,{method: "DELETE"})
          .then(()=> getmovie())
         
        }}
        >
        <DeleteIcon color='error'/>
        
      </IconButton>}
      editbtn ={<IconButton aria-label="delete"
      onClick={()=> navigate(`/movie/edit/${e.id}`) }
      >
      <EditIcon color='primary'/>
      
    </IconButton>}
      
        
        />
      ))}
    </div>
    </div>
  );
}
function Movie({ data ,id,dlt,editbtn}) {
  const navgigate = useNavigate()
  const [show, setShow] = useState(true);
  const rat = {
    color: data.rating >= 8 ? "Green" : "Red"
  };
  const summary = {
    display: show ? "none" : "block"
  };

  return (
    <div className='movie-container'>
      <img className='movie-poster' src={data.poster} alt='movie poster' />
      <div className='movie-detail'>
        <h3 className='movie-name'>{id} - {data.name}</h3>
        <p style={rat} className='movie-rating'>⭐{data.rating}</p>

      </div>
      
      <IconButton color="primary" onClick={() => setShow(!show)}>{show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</IconButton>
      <IconButton onClick={() => navgigate('/movie/'+id)}><InfoIcon/></IconButton>
      {!show ? <p className='movie-summary'>{data.summary}</p> : ""}
      {dlt} {editbtn} <Like />
    </div>
  );
}
