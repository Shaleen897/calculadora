import React from 'react'
import { useState } from 'react'


export const Carcula = () => {
    const [result, setResult] = useState("");

    const handleClick  = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length -1))
    }

    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error")
        }
    }
  return (
           <div className="calculator">
      <button className="button butto" onClick={clear}>Clear</button>
      <button className="button butto" onClick={backspace}>C</button>
    <input type="text" className="input" readOnly value={result} />

    <button className="button butto" name="7" onClick={handleClick}>7</button>
    <button className="button butto" name="8" onClick={handleClick}>8</button>
    <button className="button butto" name="9" onClick={handleClick}>9</button>
    <button className="button color-boton" name="/" onClick={handleClick}>/</button>

    <button className="button butto" name="4" onClick={handleClick}>4</button>
    <button className="button butto" name="5" onClick={handleClick}>5</button>
    <button className="button butto" name="6" onClick={handleClick}>6</button>
    <button className="button color-boton" name="*" onClick={handleClick}>*</button>

    <button className="button butto" name="1" onClick={handleClick}>1</button>
    <button className="button butto" name="2" onClick={handleClick}>2</button>
    <button className="button butto" name="3" onClick={handleClick}>3</button>
    <button className="button color-boton" name="-" onClick={handleClick}>-</button>

    <button className="button butto" name="0" onClick={handleClick}>0</button>
    <button className="button color-boton" name="." onClick={handleClick}>.</button>
    <button className="button color-boton" onClick={calculate}>=</button>
    <button className="button color-boton" name="+" onClick={handleClick}>+</button>
  </div>
  )
}

export default Carcula;
