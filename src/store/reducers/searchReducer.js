import {SEARCH_PRODUCTS} from '../types'

const initialState = {
    searchList:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchList:action.payload,
                loading:false
            }
        default: return state
    }
}