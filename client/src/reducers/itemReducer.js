import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuidv4(), name: 'Eggs'},
        { id: uuidv4(), name: 'Milk'},
        { id: uuidv4(), name: 'Sugar'},
        { id: uuidv4(), name: 'Bread'},
        { id: uuidv4(), name: 'Ham'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: 
        return {
            ...state
        }
        default: 
            return state;
    }
}