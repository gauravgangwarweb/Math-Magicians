import React, { useState } from 'react'
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function

const Calculator = () => {
  const [state, setState] = useState({total: 0, next: null, operation: null});
  const {total, next, operation} = state;
  const clickHandler = (e) => {
    const clickedButton = e.target.innerText;
    const result = calculate(state, clickedButton);
    setState(result);
  } 

  return (
    <div className='bg-[#0f172a] w-full h-[745px] flex justify-center'>
      <div className='w-[60%] grid columns-6 gap-1 bg-[#c8c8c8] h-[80%] mt-20 text-3xl'>
        <ul className='w-full bg-[#858693] flex justify-end'>
          <span className='my-[auto] p-2 result text-white text-right'>{total} {" "} {operation} {" "} {next}</span>
        </ul>
        <ul className='grid grid-cols-4 gap-1 justify-center items-center'>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>AC</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>+/-</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>%</button></li>
          <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>÷</button></li>
        </ul>
        <ul className='grid grid-cols-4 gap-1'>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>7</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>8</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>9</button></li>
          <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>*</button></li>
        </ul>
        <ul className='grid grid-cols-4 gap-1'>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>4</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>5</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>6</button></li>
          <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>-</button></li>
        </ul>
        <ul className='grid grid-cols-4 gap-1'>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>1</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>2</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>3</button></li>
          <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>+</button></li>
        </ul>
        <ul className='grid grid-cols-4 gap-1'>
          <li className='col-span-2 bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>0</button></li>
          <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>.</button></li>
          <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={clickHandler}>=</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Calculator;