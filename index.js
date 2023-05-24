const {createStore} = require("redux")



//defining constants

const INCREMENT = " INCREMENT";
const DECREMENT = " DECREMENT";


const initialCounterState = {
     count: 0,
};

const initialUsersState = {
     users: [
          {
               name: "mdSofiullah"
          }
     ]
}


// action


const incrementCounter = ()=>{
     return{
          type: INCREMENT,
     }
}

const decrementCounter = ()=>{
     return{
          type: DECREMENT,
     }
}

//reducer 

const counterReducer = (state=initialCounterState, action)=>{
     switch(action.type){
          case INCREMENT:
               return {
                    ...state,
                    count: state.count + 1
               }


          case DECREMENT:
               return {
                    ...state,
                    count: state.count - 1
               }


          default:
               state;

     }
}






// create store
const store = createStore(counterReducer)
store.subscribe(()=>{
     console.log(store.getState())
});


//dispatch action

// store.dispatch({type: INCREMENT})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
