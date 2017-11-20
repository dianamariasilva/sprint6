
import createStore from 'redux-zero'

const initialState = {
   successSignIn : false,
   user : {
      id : null,
      email :  null,
      firstname :  null,
      survey :  null,
      lastname :  null,
      passwordConf :  null            
   }  
}

const store = createStore (initialState);
export default store