import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch();
  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }
  const incrementby5Handler=()=>{
    dispatch({type:'increment5'})
  }
  const decrementby5Handler=()=>{
    dispatch({type:'decrement5'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementby5Handler}>Increment By 5</button>
        <button onClick={decrementby5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
