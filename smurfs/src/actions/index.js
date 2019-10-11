import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL'

export const PUT_SMURF_START = 'POST_SMURF_START'
export const PUT_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const PUT_SMURF_FAIL = 'POST_SMURF_FAIL'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }))
}

export const postSmurf = (payload) => dispatch => {
    dispatch({ type: POST_SMURF_START })
    axios
        .post("http://localhost:3333/smurfs", {
            name: String(payload.name),
            age: Number(payload.age),
            height: String(payload.height)
        })
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err, msg) => {
            dispatch({ type: POST_SMURF_FAIL, payload: err })
        })
}

export const putSmurf = payload => dispatch => {
    dispatch({ type: PUT_SMURF_START })
    axios
        .put(`http://localhost:3333/smurfs/${payload.id}`, {
            name: String(payload.name),
            age: Number(payload.age),
            height: String(payload.height)
        })
        .then(res => {
            dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data })
        })
        .catch((err, msg) => {
            dispatch({ type: PUT_SMURF_FAIL, payload: err })
        })
}

export const deleteSmurf = payload => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`http://localhost:3333/smurfs/${payload}`)
        .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }))
}