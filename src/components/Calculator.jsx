import React, { Component } from 'react'
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const inputElm = document.querySelector('.result');

    if ((next != null)) {
      inputElm.value = next;
    } else if (!Number.isNaN(total)) {
      inputElm.value = total;
    }
  }

  clickHandler(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  }

  render() {
    return (
      <div className='bg-[#0f172a] w-full h-[745px] flex justify-center'>
        <div className='w-[60%] grid columns-6 gap-1 bg-[#c8c8c8] h-[80%] mt-20 text-3xl'>
          <ul className='w-full bg-[#858693] flex justify-end'>
            <input type="text" className='my-[auto] p-2 result text-white bg-inherit text-right placeholder:text-white active:outline-none focus:outline-none' placeholder='0' readOnly />
          </ul>
          <ul className='grid grid-cols-4 gap-1 justify-center items-center'>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>AC</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>+/-</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>%</button></li>
            <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>÷</button></li>
          </ul>
          <ul className='grid grid-cols-4 gap-1'>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>7</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>8</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>9</button></li>
            <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>*</button></li>
          </ul>
          <ul className='grid grid-cols-4 gap-1'>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>4</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>5</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>6</button></li>
            <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>-</button></li>
          </ul>
          <ul className='grid grid-cols-4 gap-1'>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>1</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>2</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>3</button></li>
            <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>+</button></li>
          </ul>
          <ul className='grid grid-cols-4 gap-1'>
            <li className='col-span-2 bg-[#e0e0e0] flex justify-center items-center border-4 h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>0</button></li>
            <li className='bg-[#e0e0e0] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>.</button></li>
            <li className='bg-[#ff8c31] flex justify-center items-center h-[100%] my-[auto] cursor-pointer'><button className='w-full' type='button' onClick={this.clickHandler}>=</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Calculator