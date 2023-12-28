import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/countSlice'

const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((state)=>state.counterReducer.count)
  return (
    <div style={{width:'500px'}} className='border rounded p-5 text-center'>
      <h1 style={{fontSize:"100px"}}>{count}</h1>
      <div className="d-flex justify-content-evenly align-item-center mt-5">
        <button className='btn btn-warning'onClick={()=>dispatch(decrement())} >Decrement</button>
        <button className='btn btn-danger'onClick={()=>dispatch(reset())} >Reset</button>
        <button className='btn btn-success'onClick={()=>dispatch(increment())} >Increment</button>
      </div>
    </div>
  )
}

export default Counter
