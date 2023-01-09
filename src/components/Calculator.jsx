import React, { Component } from 'react'

export class Calculator extends Component {
  render() {
    return (
      <div className='bg-[#0f172a] w-full h-[745px] flex justify-center'>
        <div className='w-[60%] grid columns-6 bg-black/20 h-[80%] mt-20 text-3xl'>
          <ul className='w-full bg-[#858693] text-white flex justify-end'>
            <li className='my-[auto] p-2'>0</li>
          </ul>
          <ul className='grid grid-cols-4 justify-center items-center'>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>AC</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>+/-</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>%</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>+</button></li>
          </ul>
          <ul className='grid grid-cols-4'>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>7</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>8</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>9</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>*</button></li>
          </ul>
          <ul className='grid grid-cols-4'>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>4</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>5</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>6</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>-</button></li>
          </ul>
          <ul className='grid grid-cols-4'>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>1</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>2</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>3</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>+</button></li>
          </ul>
          <ul className='grid grid-cols-4'>
            <li className='col-span-2 bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>0</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>.</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button'>=</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Calculator