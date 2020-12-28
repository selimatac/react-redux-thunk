import {GET_GATEGORY} from '../types'

const initialState = {
    category:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_GATEGORY:
        return {
            ...state,
            category:action.payload,
            loading:false

        }
        default: return state
    }

}