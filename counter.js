import React,{UseState} from 'react';
function Counter()
{
    const [count,setCount]=UseState(0);
    function Increment()
    {
        setCount(count +1);
    };
    
        function Decrement(){
            setCount(count-1);
        }
    
        return(
            <div>
                <p>count:{count}</p>
                <button>onClick={Increment}>Increment</button>
                <button>onClick={Decrement}>Decrement</button>
            </div>
        );
}
export default Counter;