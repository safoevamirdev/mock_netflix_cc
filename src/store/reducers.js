import * as actionTypes from './actions'

const initialState = {
        isMouseInside: false,
        mylist : [  
        {
        'title': 'Futurama',
        'id': 1,
        'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
        'title': 'The Interview',
        'id': 2,
        'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
        'title': 'Gilmore Girls',
        'id': 3,
        'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
        ],
        recommendations : [
        {
        'title': 'Family Guy',
        'id': 4,
        'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
        'title': 'The Croods',
        'id': 5,
        'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
        'title': 'Friends',
        'id': 6,
        'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
        ]
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case actionTypes.ADD_TO_LIST:
        let found = state.mylist.find(function(movie) {
            return movie.id === action.payload.id
        })
        if (!found) {
            return {...state, mylist: [...state.mylist, action.payload]
            }
        }else{
            return {...state, mylist: [...state.mylist]}
        }
    case actionTypes.REMOVE_FROM_LIST:
        let myList = state.mylist
        let resultArr = myList.filter(movie => movie.id !== action.payload.id)
        return {...state, mylist: resultArr}
    
    case actionTypes.IS_MOUSE_INSIDE:
        
        if(action.payload){
            let bool = true
            return {...state, isMouseInside: bool}
        }else{
            let bool = false
            return {...state, isMouseInside: bool}
        }
    default:
        return state;
    }
}

export default reducer