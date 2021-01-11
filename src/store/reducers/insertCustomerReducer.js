import {INSERT_CUSTOMER} from '../types'

const initialState = {
    customer:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case INSERT_CUSTOMER:
            return {
                ...state,
                customer:action.payload,
                loading:false
            }
        default: return state
    }
}