import SHOP_DATA from './shop.data'

const INIRIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state= INIRIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default shopReducer;