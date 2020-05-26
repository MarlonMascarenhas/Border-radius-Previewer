import React, { useState }from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './styles.css';

function App() {
  const [topleft, setTopLeft] = useState('50');
  const [topright, setTopRight] = useState('40');
  const [bottomright, setBottomRight] = useState('30');
  const [bottomleft, setBottomLeft] = useState('20');
  function atualizaTopLeft(e){
    setTopLeft(e.target.value);
  }
  function atualizaTopRight(e){
    setTopRight(e.target.value);
  }
  function atualizaBottomRight(e){
    setBottomRight(e.target.value);
  }
  function atualizaBottomLeft(e){
    setBottomLeft(e.target.value);
  }
  return (
    <div className="longBar">
      <h1>Border Radius Previewer</h1>
      <div className= "borderMax">
        <div className="borderRad" style = {{borderRadius: topleft +'px ' + topright +'px ' + bottomright +'px ' + bottomleft +'px '}}>
        <p>borderRadius: {topleft}px {topright}px {bottomright}px {bottomleft}px</p>
        </div>
      </div>
      <div className="boxInput">
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaTopLeft} type="number" value={topleft}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaTopRight} type="number" value={topright}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaBottomRight} type="number" value={bottomright}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3"  className="inputProp"> 
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={atualizaBottomLeft} type="number" value={bottomleft}/>
        </InputGroup>
      </div>
    </div>
  );
}

export default App;
