import React, { useReducer } from 'react'


function Guests(props) {
    const initialState = { num: props.count };
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                const x = { num: state.num + 1 };
                props.countUpdate(x.num);
                return x;
            case 'decrement':
                const y = { num: state.num - 1 };
                if (state.num !== 0) {
                    props.countUpdate(y.num);
                    return y;
                };

                return { num: 0 };
            default:
                throw new Error(`Can't find this action`);
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)




    return (
        <div className="py-2">
            <p className="text-base font-extrabold  leading-4 text-left ">{props.for}</p>
            <p className="text-base text-gray2 text-left ">{props.agesFrom}</p>
            <div className=" flex w-20 justify-between my-2">
                <button className={`border-2 px-2 border-gray-300 rounded-md ${props.extraClass}`} onClick={() => dispatch({ type: 'increment' })}>+</button>
                <p>{state.num}</p>
                <button className={`border-2 px-2 border-gray-300 rounded-md ${props.extraClass}`} onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>
        </div>
    )
}

export default Guests;
