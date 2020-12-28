import {GET_PRODUCTS_BY_PARAMS} from '../types'

const initialState = {
    product:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_PRODUCTS_BY_PARAMS:
            return {
                ...state,
                product:action.payload,
                loading:false
            }
        
        default: return state
    }
}