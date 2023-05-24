//store require
const {createStore} = require("redux")

//constants
const  ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
//state

const initialState = {
     user: "Md Sofiullah",
     count: 1,
}

 const addUser = (user)=>{
     return {
          type: ADD_USER,
          payload: user,

     }
 }

 const removeUser = (user)=>{
     return {
          type: REMOVE_USER,
          payload: user,
     }
 }



 

//creating Reducer

const userReducer = (state= initialState, action)=>{
     switch (action.type) {
          case ADD_USER:
               return{
                    user: [state.user, action.payload],
                    count: state.count + 1,
                   
               };
               
          case REMOVE_USER:
               return{
                    user: [state.user, action.payload],
                    count: state.count - 1,
                       
                };

        

       

          };


       
       
 
          
     }


     

// store
const store = createStore(userReducer);
store.subscribe(()=>{
     console.log(store.getState())
})
    

store.dispatch(addUser("Babu"));

store.dispatch(addUser(" Rahu"));

// store.dispatch( removeUser(" Rahu"));