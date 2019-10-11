import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL

} from '../actions'

const initialState = {
    smurfs: [{
    }],

    error: '',
    isFetching: false,
    isFetched: false,
    isPosting: false,
    isDeleting: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case FETCH_SMURFS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                smurfs: action.payload
            }
        }
        case FETCH_SMURFS_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case POST_SMURF_START: {
            return {
                ...state,
                isPosting: true
            }
        }
        case POST_SMURF_SUCCESS: {
            return {
                ...state,
                isPosting: false,
                smurfs: action.payload
            }
        }
        case POST_SMURF_FAIL: {
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }

        }
        case DELETE_SMURF_START: {
            return {
                ...state,
                isDeleting: true
            }
        }
        case DELETE_SMURF_SUCCESS: {
            return {
                ...state,
                isDeleting: false,
                smurfs: action.payload
            }
        }
        case DELETE_SMURF_FAIL: {
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}