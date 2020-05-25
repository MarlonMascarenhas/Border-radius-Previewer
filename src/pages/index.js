import React, { useState }from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './styles.css';

function App() {
  const [topleft, setTopLeft] = useState('50');
  const [topright, setTopRight] = useState('50');
  const [bottomright, setBottomRight] = useState('50');
  const [bottomleft, setBottomLeft] = useState('50');
  const [radiusStyle, setRadiusStyle] = useState(topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px ');
  function atualizaTopLeft(e){
    setTopLeft(e.target.value);
    setRadiusStyle(topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px ');
  }
  function atualizaTopRight(e){
    setTopRight(e.target.value);
    setRadiusStyle(topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px ');
  }
  function atualizaBottomRight(e){
    setBottomRight(e.target.value);
    setRadiusStyle(topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px ');
  }
  function atualizaBottomLeft(e){
    setBottomLeft(e.target.value);
    setRadiusStyle(topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px ');
  }
  return (
    <div className="longBar">
      <div className= "borderMax">
        <div className="borderRad" style = {{borderRadius: radiusStyle}}>
        </div>
      </div>
      <div className="boxInput">
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaTopLeft} />
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaTopRight}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaBottomRight}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaBottomLeft}/>
        </InputGroup>
      </div>
    </div>
  );
}

export default App;
