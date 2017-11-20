
import createStore from 'redux-zero'

const initialState = {
   successSignIn : false,
   user : {
      id : null,
      email :  null,
      fullname :  null,
      survey :  null,
      question :  null,
      options :  null            
   }  
}

const store = createStore (initialState);
export default store