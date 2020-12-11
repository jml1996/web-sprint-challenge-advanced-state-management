import { API_SMURFS_START,
    API_GET_SMURFS_SUCCESS,
    API_POST_SMURFS_SUCCESS,
    API_SMURFS_FAIL,
    FORM_ERROR } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
    smurfFormErrorMessage: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(API_SMURFS_START):
            return({
                ...state,
                isLoading: true,
                error: ""
            });
        case(API_GET_SMURFS_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ""
            });
        case(API_POST_SMURFS_SUCCESS):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false,
                error: "",
                smurfFormErrorMessage: ""
            });
        case(API_SMURFS_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload
            });
        case(FORM_ERROR):
            return({
                ...state,
                isLoading: false,
                smurfFormErrorMessage: action.payload
            });
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary