import ShopActionTypes from './shop.types'

const INIRIAL_STATE = {
    collections: null
};

const shopReducer = (state= INIRIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections:action.payload  
            }
        default:
            return state;
    }
}

export default shopReducer;