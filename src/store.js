
import createStore from 'redux-zero'

const COMMENT = [
    
  ]
const initialState = {
    successSignIn : false,
    user : {
        id : null,
        email :  null,
        firstname :  null,
        lastname :  null,
        passwordConf :  null           
    },
    stages: [ ],
    tasks: [ ],
    comments : COMMENT,
    board: board,
    board2: board2,
    selectedTodo: -1
}

  const board = [
    {
        id: 0,
        name: 'klxjfslid'
    },
    {
        id: 1,
        name: 'task2'
    },
    {
        id: 2,
        name: 'Css',
    },
    {
        id: 3,
        name: 'Javascript'
    },
    {
        id: 4,
        name: 'HTML'
    },
    {
        id: 5,
        name: 'lkddl',
    }
];

const board2 = [
    {
        id: 0,
        name: 'Diana'
    },
    {
        id: 1,
        name: 'Maria'
    },
    {
        id: 2,
        name: 'Valentina',
    },
    {
        id: 3,
        name: 'Sergio'
    },
    {
        id: 4,
        name: 'tareas'
    },
    {
        id: 5,
        name: 'firebase',
    }
];


const store = createStore (initialState);
export default store