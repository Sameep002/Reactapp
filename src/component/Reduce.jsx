import React,{useReducer} from 'react'



const Reduce = () => {
    const [state, dispatch] = useReducer(change,0)
    function change(state,action){
        switch (action.type) {
            case "dec":
                return state-1;
            case "inc":
                return state+1;
            default:
                break;
        }
    }
  return (
    <div>
        <div onClick={() => dispatch({type: 'dec'})}>dec</div>
        <div>{state}</div>
        <div onClick={() => dispatch({type: 'inc'})}>inc</div>
    </div>
  )
}

export default Reduce;