import store from './store'
import {auth, database} from './firebase';

export function signUp (firstname, email, pass, lastName, question, options) 
{
   console.log ('signUp' + firstname + email + pass);

   auth.createUserWithEmailAndPassword (email, pass).then ( user => {
      let newuser = {
         firstname, email, lastName, question, options
      }
      database.ref ('users/' + user.uid).set (newuser);       
      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : user.uid,
               email :  fullUserInfo.email,
               firstname :  fullUserInfo.firstname,
               lastName :  fullUserInfo.lastName,
               question :  fullUserInfo.question,
               options :  fullUserInfo.options               
            }
         })
      })

   })
   
}

export function signOut () {
   auth.signOut();
   store.setState ( {
      successSignIn : false,
      user: {
         id :'',
         email :  ''
      }
   })
}

export function signIn (user, pass) {
   auth.signInWithEmailAndPassword(user, pass).then (userObj => {

      database.ref ('users/' + userObj.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         console.log ('full info ', fullUserInfo);
         store.setState ( {
            user: {
               id : userObj.uid,
               email :  fullUserInfo.email,
               firstname :  fullUserInfo.firstname,
               lastName :  fullUserInfo.lastName,
               passwordConf :  fullUserInfo.passwordConf             
            }
         })
      })
   })
}


auth.onAuthStateChanged(user => {
   if (user) {
      console.log('user', user);
      let usersRef = database.ref('/users');
      let userRef = usersRef.child(user.uid);
      store.setState ( {
         successSignIn : true
      })
   }
});