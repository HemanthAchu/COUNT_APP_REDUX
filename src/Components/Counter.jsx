import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/countSlice'

const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((state)=>state.counterReducer.count)
const [amount,setamount] = useState("")
const handleincrement=()=>{
if(amount===""){
  alert("please enter number")
}else{
  dispatch(incrementByAmount(Number(amount)))
  setamount("")
}
}
  return (
    <div style={{width:'500px'}} className='border rounded p-5 text-center'>
      <h1 style={{fontSize:"100px"}}>{count}</h1>
      <div className="d-flex justify-content-evenly align-item-center mt-5">
        <button className='btn btn-warning'onClick={()=>dispatch(decrement())} >Decrement</button>
        <button className='btn btn-danger'onClick={()=>dispatch(reset())} >Reset</button>
        <button className='btn btn-success'onClick={()=>dispatch(increment())} >Increment</button>
      </div>
      <div className="d-flex justify-content-evenly align-item-center mt-5">

        <input value={amount} onChange={e=>setamount(e.target.value)} className='w-75 form-control ' placeholder='Input increment amount' type="text" />
        <button onClick={handleincrement} className='btn btn-primary '>Start</button>
      </div>
    </div>
  )
}

export default Counter
