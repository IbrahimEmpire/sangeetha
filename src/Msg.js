import { Adclr } from './Adclr';
import { Like } from './Like';


function Msg({ name, pic }) {
  return (
    <div>
      <h3>This is {name}</h3>
      <img src={pic} alt='profile pic' />
      <Like />
      <Adclr />
    </div>
  );

}
