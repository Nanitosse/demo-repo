const CounterReducer = (state=0, action)=>{
    switch(action.name){
        case 'INCREMENT':
            return state +1;

        case "DECREMENT"  :
            return state -1;  

    }

}


export default CounterReducer;