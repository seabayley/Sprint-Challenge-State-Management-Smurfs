import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SmurfList from './components/SmurfList'

import { getSmurfs } from './actions'

import CircularProgress from '@material-ui/core/CircularProgress'
import './index.css'

export default () => {
    const dispatch = useDispatch();
    const isFetched = useSelector(state => state.isFetched)

    useEffect(() => {
        dispatch(getSmurfs())
    }, [])

    return (
        <div className="App">
            {!isFetched ? <CircularProgress /> : <SmurfList />}
        </div>
    )
}