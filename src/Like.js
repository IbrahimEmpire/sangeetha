import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export const Like = () => {

  const [like, setLike] = useState(0);
  const [dis, setDis] = useState(0);
  return (
    <div className='like'>
      <IconButton aria-label="delete"
      className='btn' onClick={() => setLike(like + 1)}>
         <Badge badgeContent={like} color="success">
         👍
      </Badge>
  
</IconButton>
     <IconButton aria-label="delete" className='btn' onClick={() => setDis(dis + 1)}>
     <Badge badgeContent={dis} color="error">
     👎
      </Badge>
     </IconButton>
     
    </div>
  );
};
