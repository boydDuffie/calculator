import './App.css';
import {Result} from '../Result/Result';
import {Pad} from '../Pad/Pad';
import {Button} from '../Button/Button';
import React, {useState} from 'react';

export const App = (props) => {

  const [val, setVal] = useState('');

  const calculate = () => {
    try {
      const res = eval(val);
      setVal(res);
    } catch(e) {
      setVal('error');
    }
  }

  const handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'AC':
        setVal('');
        break;
      case 'CE':
        setVal(val.slice(0, -1));
        break;
      case '=':
        calculate();
        break;
      default:
        setVal(val + value);
    }
  }

  return (
    <div className="calc-body">
      <Result value={val}/>
      <Pad>
        <div className="button-row #AcCe/">
                <Button onClick={handleClick} label="AC" value='AC' style={{minWidth: '45%'}}/>
                <Button onClick={handleClick} label="CE" value='CE'/>
                <Button onClick={handleClick} label="/" value='/'/>
            </div>
            <div className="button-row 789x">
                <Button onClick={handleClick} label="7" value='7'/>
                <Button onClick={handleClick} label="8" value='8'/>
                <Button onClick={handleClick} label="9" value='9'/>
                <Button onClick={handleClick} label="x" value='*'/>
            </div>
            <div className="button-row 456-">
                <Button onClick={handleClick} label="4" value='4'/>
                <Button onClick={handleClick} label="5" value='5'/>
                <Button onClick={handleClick} label="6" value='6'/>
                <Button onClick={handleClick} label="-" value='-'/>
                </div>
            <div className="button-row 123+">
                <Button onClick={handleClick} label="1" value='1'/>
                <Button onClick={handleClick} label="2" value='2'/>
                <Button onClick={handleClick} label="3" value='3'/>
                <Button onClick={handleClick} label="+" value='+'/>
            </div>
            <div className="button-row 0.=">
                <Button onClick={handleClick} label="0" style={{minWidth: '45%'}} value='0'/>
                <Button onClick={handleClick} label="." value='.'/>
                <Button onClick={handleClick} label="=" value='='/>
            </div>
      </ Pad>
    </div>
  );
}

export default App;
