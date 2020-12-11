import axios from 'axios';

export const API_SMURFS_START = "API_SMURFS_START";
export const API_GET_SMURFS_SUCCESS = "API_GET_SMURFS_SUCCESS";
export const API_POST_SMURFS_SUCCESS = "API_POST_SMURFS_SUCCESS";
export const API_SMURFS_FAIL = "API_SMURFS_FAIL";

export const fetchSmurfs = () => dispatch => {
    dispatch({type:API_SMURFS_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);
            dispatch({type:API_GET_SMURFS_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_SMURFS_FAIL, payload:err}));
}

export const addSmurf = (name, nickname, position, description) => dispatch => {
    if (!name || !nickname || !position) {
        dispatch({type:API_SMURFS_FAIL, payload:"Name, nickname, and position are required."})
    }
    let checkDescription = "";
    if (description) {
        checkDescription = description;
    }
    const newSmurf = {
        name: name,
        nickname: nickname,
        position: position,
        description: checkDescription
    }

    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then((res) => {
            console.log(res);
            dispatch({type:API_POST_SMURFS_SUCCESS, payload:newSmurf})
        })
        .catch(err => dispatch({type:API_SMURFS_FAIL, payload:err}));
}

export const setErrorText = (errorText) => {
    // Same reducer case as the others? What is this action for??
    return {type:API_SMURFS_FAIL, payload:errorText};
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.