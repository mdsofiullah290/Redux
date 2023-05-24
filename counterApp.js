// state - count: 0
// action - increment, decrement, reset.
// reducer 
// store

//store require
const {createStore} = require("redux")

//constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

//state

const initialState = {
     count: 0,
}

const incrementAction =()=>{
     return {
          type: INCREMENT
        }
}


const decrementAction =()=>{
     return {
          type: DECREMENT,
        }
}


const resetCounterAction =()=>{
     return {
          type: RESET,
        }
}



const incrementActionByValue =(value)=>{
     return {
          type: INCREMENT_BY_VALUE,
          payload: value,
        }
}


//creating Reducer

const counterReducer = (state= initialState, action)=>{
     switch (action.type) {
          case INCREMENT:
               return{
                    ...state,
                    count: state.count +1,
               };
               
          case DECREMENT:
               return{
                     ...state,
                         count: state.count - 1,
                };

          case RESET:
               return{
                    ...state,
                    count: 0,
               }
          

          
          case INCREMENT_BY_VALUE:
               return {
                    ...state,
                        count: state.count + action.payload,
               }



          };


       
       
 
          
     }




// store
const store = createStore(counterReducer);
store.subscribe(()=>{
     console.log(store.getState())
})


// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetCounterAction());
// store.dispatch(decrementAction());
store.dispatch(incrementActionByValue(5));
store.dispatch(incrementActionByValue(15));





