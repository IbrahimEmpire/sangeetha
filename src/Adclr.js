import { useState } from 'react';

export const Adclr = () => {
  const [clr, setClr] = useState("");
  const [colorList, setColerList] = useState([]);

  const style = {
    fontSize: "14px",
    backgroundColor: clr
  };

  return (
    <div>
      <div><input onChange={(e) => setClr(e.target.value)} style={style} />
        <button onClick={() => setColerList([...colorList, clr])}>Add color</button>
      </div>
      {colorList.map((e) => (
        <Clrbox color={e} />
      ))}
    </div>
  );
};
const Clrbox = ({ color }) => {
  const style = {
    backgroundColor: color,
    height: "30px",
    width: "180px",
    borderRadius: "10px"
  };
  return (
    <div className='clr' style={style}></div>
  );
};
