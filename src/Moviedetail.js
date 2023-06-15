import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from 'react';

export function Moviedetail() {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  const { id } = useParams();
  // const movie = data[id];


  useEffect(()=>{
    fetch(`https://63ddb97d367aa5a7a4135ba7.mockapi.io/user/${id}`,{method: "GET"})
    .then((res)=>res.json())
    .then((res)=>setMovie(res))
      },[])

  return (
    <div className='movie-detail-container'>
      <Button  onClick={()=>navigate(-1)}><ArrowBackIosIcon/>Back</Button>
<div><iframe width= "100%" height="700"
 src={movie.video} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 allowfullscreen></iframe></div>
<div className='movie-detail'>
  <h3 className='movie-detail-name'>{movie.name}</h3>
  <p  className='movie-detail-rating'>⭐{movie.rating}</p>

</div>

 <p className='movie-detail-summary'>{movie.summary}</p> 

</div>
  );
}
