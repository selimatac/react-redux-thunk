import {CUSTOMER_LOGIN} from '../types'

const initialState = {
    customerloginInfo:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case CUSTOMER_LOGIN:
        return {
            ...state,
            customerloginInfo:action.payload,
            loading:false
        }
        default: return state
    }

}