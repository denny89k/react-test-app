import { GET_CONTACTS, ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT} from '../actions/constants';
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ContactService from '../api/ContactService';
import * as samples from '../api/samples.json';

const initialState = { contacts: samples.contacts, currentContact: {} };

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return  Object.assign({}, state, {contacts: action.contacts})
        case EDIT_CONTACT:
            return  Object.assign({}, state, {currentContact: action.contact})
        case UPDATE_CONTACT:
            return  Object.assign({}, state, {currentContact: {}})    
        default:
            return state
    }
}

export default combineReducers({contact: contactReducer, form: formReducer })

